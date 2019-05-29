from flask import Flask, request, jsonify
from flaskext.mysql import MySQL
import json
import hashlib
import traceback
import sys

reload(sys)
sys.setdefaultencoding('utf-8')

app = Flask(__name__)
mysql = MySQL()

# MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'sonparamilo'
app.config['MYSQL_DATABASE_PASSWORD'] = 'sonparamilo'
app.config['MYSQL_DATABASE_DB'] = 'sonparam_pasticipantes'
app.config['MYSQL_DATABASE_HOST'] = '10.142.0.2'

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
                content['lugares'] = content['lugar'] if len(content['lugar']) > 1 else "','".join(content['lugar'])
                query = "select count(*) from lugares where id in ('{lugares}') and participante is not null".format(**content)
                cur.execute(query)
                aux = cur.fetchone()
                #print verif
                if (aux[0] <= 0):
                    query = "Insert into participantes (id,nombre,appaterno,apmaterno,telefono,correo,categoria,estado,comentario,productoDescrip,categoriaProd,productoPrin,otrosProd) value('{id}','{nombre}','{appaterno}','{apmaterno}','{telefono}','{correo}','{categoria}','{estado}','{comentario}','{productoDescrip}','{categoriaProd}','{productoPrin}','{otrosProd}');".format(**content)
                    cur.execute(query)
                    query = "Update lugares set participante = '{id}' where id in ('{lugares}');".format(**content)
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

@app.route('/eliminarPart', methods=['POST'])
def eliminarPart():
    if (request.is_json):
        content = request.get_json()
        query = "update lugares SET participante=NULL where participante like '{id}';".format(**content)
        cur = mysql.connect().cursor()
        cur.execute(query)
        query = "delete from participantes where id like '{id}';".format(**content)
        cur.execute(query)
        cur.close()
        response = jsonify("{'status':true}")
        response.status_code = 200
    else:
        raise InvalidUsage('Error format JSON', status_code=400)
    return response

@app.route('/busqueda/lugaresArea', methods=['POST'])
def lugaresArea():
    if (request.is_json):
        try:
            content = request.get_json()
	    query = "select l.id as id, l.precio as precio, p.productoPrin as producto, p.categoriaProd as categoria from participantes as p right join lugares as l on l.participante=p.id where l.id like '{area}%' group by l.id".format(**content)
            cur = mysql.connect().cursor()
            cur.execute(query)
            aux = [dict((cur.description[i][0], value)
                      for i, value in enumerate(row)) for row in cur.fetchall()]
            cur.close()
            r = []
            for x in aux:
                r.append({x['id']:x['producto'],"categoria":x['categoria'],"precio":x['precio']})
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

@app.route('/busqueda/participantes', methods=['POST'])
def busquedaPart():
    try:
        query = "select p.id, p.nombre, p.appaterno, p.apmaterno, p.telefono, p.correo, group_concat(l.id SEPARATOR ',') as lugares, sum(l.precio) as precio,p.fechaReg as fecha, p.categoria, p.estado, p.comentario, p.productoDescrip, p.categoriaProd, p.productoPrin, p.otrosProd from participantes as p inner join lugares as l on l.participante=p.id group by p.id ORDER BY p.fechaReg ASC;"
        cur = mysql.connect().cursor()
        cur.execute(query)
        r = [dict((cur.description[i][0], value)
                  for i, value in enumerate(row)) for row in cur.fetchall()]
        cur.close()
        print r
        response = jsonify(r)
        response.status_code = 200
    except Exception, err:
        traceback.print_exc()
        raise InvalidUsage('Error format JSON', status_code=400)
    return response 

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
