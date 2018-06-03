<?php
include 'mysql.php';
$objDatos = json_decode(file_get_contents("php://input"));

if ($objDatos->accion == 'update') {
	$datos = (array) $objDatos;
	$conex = ConexionMysql();
	if (!is_null($conex)){
		//print_r($datos);
		switch ($datos['update']) {
			case 'confirmacion':
				$query = "update participantes set confirmacion=".$datos['dato']." where id like '".$datos['id']."'";
				break;
		}
		//print_r(json_encode(array($query)));
		if ($conex->query($query)) {
			print_r(json_encode(array("mensaje"=>"Actualización exitosa")));
		}else{
			print_r(json_encode(array("error"=>"Consulta no valida")));
		}
	}else{
		print_r(json_encode(array("error"=>"Error de conexion")));
	}
}else{
	print_r(json_encode(array("error"=>"Consulta no valida")));
}
?>