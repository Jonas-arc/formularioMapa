<?php
function ConexionMysql(){
	$mysqli = new mysqli("127.0.0.1", "sonparam_regPart", "son;Para;Milo2017", "sonparam_pasticipantes", 3306);
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
		case 'lugar':
			return 7;
		case 'estado':
			return 8;
		default:
			return 9;
	}
}

function ukInsert($a,$b){
	return (ordenInsert($a)-ordenInsert($b));
}
?>