<?php
function ConexionMysql(){
	$mysqli = new mysqli("mysql.hostinger.mx", "u304639672_sonpm", "son;Para;Milo2017", "u304639672_parti", 3306);
	if ($mysqli->connect_errno) {
	    // "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
	    return null;
	}
	return $mysqli;
}

function QueryMysql($query='', &$mysqli){
	if ($resultado = $mysqli->query($query)) {
	    return $resultado;
	}else{
		print_r($resultado);
		return null;
	}
}

function ordenInsert($a){
	switch ($a) {
		case 'id':
			return 0;
		case 'name':
			return 1;
		case 'appaterno':
			return 2;
		case 'apmaterno':
			return 3;
		case 'telefono':
			return 4;
		case 'email':
			return 5;
		case 'categoria':
			return 6;
		case 'estado':
			return 7;
		case 'comentario':
			return 8;
		case 'productoDescrip':
			return 9;
		default:
			return 10;
	}
}

function ukInsert($a,$b){
	return (ordenInsert($a)-ordenInsert($b));
}
?>