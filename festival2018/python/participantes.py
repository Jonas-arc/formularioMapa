from flask import Flask, request, jsonify
from flaskext.mysql import MySQL
import json
import hashlib
import traceback

app = Flask(__name__)
mysql = MySQL()

# MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'holahola'
app.config['MYSQL_DATABASE_DB'] = 'sonparam_pasticipantes'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'

mysql.init_app(app)

class InvalidUsage(Exception):
    status_code = 400

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv

@app.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response

@app.route('/altaParticipante', methods = ['POST'])
def participantes():
    if (request.is_json):
	try:
            content = request.get_json()
            content['id']= hashlib.sha1(content['nombre'] + content['telefono'] + content['correo'] + content['appaterno']).hexdigest()[0:8]
            query = "select count(*) from participantes where id like '{id}' or (nombre like '{nombre}' and appaterno like'{appaterno}' and apmaterno like '{apmaterno}') or correo like '{correo}'".format(**content)
            cur = mysql.connect().cursor()
            cur.execute(query)
            aux = cur.fetchone()
            if (aux[0] <= 0):
                content['lugares'] = "','".join(content['lugar'])
                query = "select count(*) from lugares where id in ('{lugares}') and participante is not null".format(**content)
                cur.execute(query)
                aux = cur.fetchone()
                if (aux[0] <= 0):
                    query = "LOCK TABLES lugares WRITE, participantes WRITE, producto WRITE, producto_participante WRITE;\n"
                    query += "Insert into participantes (id,nombre,appaterno,apmaterno,telefono,correo,categoria,estado,comentario,productoDescrip) value('{id}','{nombre}','{appaterno}','{apmaterno}','{telefono}','{correo}','{categoria}','{estado}','{comentario}','{productoDescrip}');\n".format(**content)
                    query += "Update lugares set participante = '{id}' where id in ('{lugares}');\n".format(**content)
                    for x in content['producto']:
                        query += "INSERT INTO `producto` (`nombre`) SELECT * FROM (SELECT '%s') AS tmp WHERE NOT EXISTS (SELECT `nombre` FROM `producto` WHERE nombre = '%s') LIMIT 1;\n" % (x,x)
                        query += "insert into producto_participante (idProducto,idParticipante)value('%s','%s');\n" % (x, content['id'])
                    query += "UNLOCK TABLES;"
                    cur.execute(query)
                    response = jsonify("{folio:'%s'}" % content['id'])
                    response.status_code = 200
                else:
                    raise InvalidUsage('Lugares ocupados', status_code=400)
            else:
                raise InvalidUsage('Participante registrado', status_code=400)
        except Exception, err:
            traceback.print_exc()
            raise InvalidUsage('Error format JSON', status_code=400) 
    else:
        raise InvalidUsage('Error format JSON', status_code=400)
    return response

@app.route('/busqueda/productos', methods=['GET'])
def produtos():
    try:
        cur = mysql.connect().cursor()
        cur.execute('''select * from producto''')
        r = [''.join(value for value in row) for row in cur.fetchall()]
        return jsonify(r)
    except Exception, err:
        traceback.print_exc()
        raise InvalidUsage('Error en el servicio', status_code=403)

@app.route('/busqueda/lugaresArea', methods=['POST'])
def lugaresArea():
    if (request.is_json):
        try:
            content = request.get_json()
	    query = "select l.id as id, l.precio as precio, group_concat(pro.nombre SEPARATOR ',') as productos from participantes as p right join lugares as l on l.participante=p.id left join producto_participante as pp on p.id=pp.idParticipante left join producto as pro on pro.nombre=pp.idProducto where l.id like '{area}%' group by l.id".format(**content)
            cur = mysql.connect().cursor()
            cur.execute(query)
            r = [dict((cur.description[i][0], value)
                      for i, value in enumerate(row)) for row in cur.fetchall()]
            cur.close()
            return jsonify(r)
        except Exception, err:
            traceback.print_exc()
            raise InvalidUsage('Error en el servicio', status_code=403)
    else:
        raise InvalidUsage('Error format JSON', status_code=400)
    return response

@app.route('/busqueda/participantesConfirmados', methods=['POST'])
def confirmados():
    if (request.is_json):
        try:
            content = request.get_json()
            query = "select p.id, p.nombre, p.appaterno, p.apmaterno, p.telefono, p.correo, group_concat(l.id SEPARATOR ',') as lugares, sum(l.precio) as precio, p.fechaReg as fecha from participantes as p inner join lugares as l on l.participante=p.id where p.confirmacion = 1 and l.id like '%{seccion}%' group by p.id ORDER BY p.fechaReg ASC".format(**content)
            cur = mysql.connect().cursor()
            cur.execute(query)
            r = [dict((cur.description[i][0], value)
                      for i, value in enumerate(row)) for row in cur.fetchall()]
            cur.close()
            return jsonify(r)
        except Exception, err:
            traceback.print_exc()
            raise InvalidUsage('Error en el servicio', status_code=403)
    else:
        raise InvalidUsage('Error format JSON', status_code=400)
    return response

@app.route('/busqueda/participantesReservados', methods=['POST'])
def reservados():
    if (request.is_json):
        try:
            content = request.get_json()
            query = "select p.id, p.nombre, p.appaterno, p.apmaterno, p.telefono, p.correo, group_concat(l.id SEPARATOR ',') as lugares, sum(l.precio) as precio, p.fechaReg as fecha from participantes as p inner join lugares as l on l.participante=p.id where p.confirmacion = 0 and l.id like '%{seccion}%' group by p.id ORDER BY p.fechaReg ASC".format(**content)
            cur = mysql.connect().cursor()
            cur.execute(query)
            r = [dict((cur.description[i][0], value)
                      for i, value in enumerate(row)) for row in cur.fetchall()]
            cur.close()
            return jsonify(r)
        except Exception, err:
            traceback.print_exc()
            raise InvalidUsage('Error en el servicio', status_code=403)
    else:
        raise InvalidUsage('Error format JSON', status_code=400)
    return response

@app.route('/busqueda/participantesPagado', methods=['POST'])
def pagado():
    if (request.is_json):
        try:
            content = request.get_json()
            query = "select p.id, p.nombre, p.appaterno, p.apmaterno, p.telefono, p.correo, group_concat(l.id SEPARATOR ',') as lugares, sum(l.precio) as precio, p.fechaReg as fecha from participantes as p inner join lugares as l on l.participante=p.id where p.confirmacion = 2 and l.id like '%{seccion}%' group by p.id ORDER BY p.fechaReg ASC".format(**content)
            cur = mysql.connect().cursor()
            cur.execute(query)
            r = [dict((cur.description[i][0], value)
                      for i, value in enumerate(row)) for row in cur.fetchall()]
            cur.close()
            return jsonify(r)
        except Exception, err:
            traceback.print_exc()
            raise InvalidUsage('Error en el servicio', status_code=403)
    else:
        raise InvalidUsage('Error format JSON', status_code=400)
    return response

@app.route('/busqueda/validarLugar', methods=['POST'])
def validarLugar():
    if (request.is_json):
        try:
            content = request.get_json()
            content['asig']= content['asignados']  if len(content['asignados']) > 1 else "','".join(content['asignados'])
            query = "select count(*) from validarLugar where lugarSelect in ('{asig}') and lugarPosible like '{buscado}'".format(**content)
            cur = mysql.connect().cursor()
            cur.execute(query)
            aux = cur.fetchone()
            if (aux[0] <= 0):
                r = {"asignar":True}
            else:
                r = {"asignar":False}
            cur.close()
            return jsonify(r)
        except Exception, err:
            traceback.print_exc()
            raise InvalidUsage('Error en el servicio', status_code=403)
    else:
        raise InvalidUsage('Error format JSON', status_code=400)
    return response

@app.route('/')
def get():
    cur = mysql.connect().cursor()
    cur.execute('''select * from lugares''')
    r = [dict((cur.description[i][0], value)
              for i, value in enumerate(row)) for row in cur.fetchall()]
    return jsonify({'myCollection' : r})

@app.route('/search/products', methods=['GET']) #GET requests will be blocked
def products():
    cur = mysql.connect().cursor()
    cur.execute('''select * from producto''')
    r = [dict((cur.description[i][0], value)
              for i, value in enumerate(row)) for row in cur.fetchall()]
    return jsonify(r)

@app.route('/json', methods = ['POST'])
def postJsonHandler():
    print (request.is_json)
    content = request.get_json()
    print (content)
    return 'JSON posted'

if __name__ == '__main__':
    app.run()
