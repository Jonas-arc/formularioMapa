<?php
include 'mysql.php';
$objDatos = json_decode(file_get_contents("php://input"));

if ($objDatos->accion == 'login') {
	$datos = (array) $objDatos;
	$conex = ConexionMysql();
	if (!is_null($conex)){
		//print_r($datos);
		$query = "select id from usuarios where name like '".$datos['username']."' and pass = password('".$datos['password']."')";
		//print_r(json_encode(array($query)));
		$res = QueryMysql($query, $conex);
		if ($res->num_rows == 1) {
			print_r(json_encode(array("success"=>true)));
		}else{
			print_r(json_encode(array("success"=>2)));
		}
	}else{
		print_r(json_encode(array("success"=>3)));
	}
}else{
	print_r(json_encode(array("success"=>4)));
}
?>