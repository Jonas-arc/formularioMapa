from flask import Flask, request, jsonify
from flaskext.mysql import MySQL

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

@app.route('/error')
def error():
    raise InvalidUsage('This view is gone', status_code=410)

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


if __name__ == '__main__':
    app.run()
