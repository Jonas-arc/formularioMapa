<?php
include 'mysql.php';
$objDatos = json_decode(file_get_contents("php://input"));

if ($objDatos->accion == 'consulta') {
	$datos = (array) $objDatos;
	$conex = ConexionMysql();
	if (!is_null($conex)){
		switch ($datos['search']) {
			case 'lugaresOcupados':
				$query = "select id from lugares where participantes is not null";
				break;
			case 'lugaresAreaOcupados':
				$query = "select id from lugares where participantes is not null and id like '".$datos['area']."%'";
				break;
			case 'participantes':
				$query = "select p.id, p.nombre, p.appaterno, p.apmaterno, p.telefono, p.correo, group_concat(l.id SEPARATOR ',') as lugares from participantes as p inner join lugares as l on l.participante=p.id group by p.id";
				break;
			case 'participantesConfirmados':
				$query = "select p.id, p.nombre, p.appaterno, p.apmaterno, p.telefono, p.correo, group_concat(l.id SEPARATOR ',') as lugares from participantes as p inner join lugares as l on l.participante=p.id where p.confirmacion is true group by p.id";
				break;
			case 'participantesReservados':
				$query = "select p.id, p.nombre, p.appaterno, p.apmaterno, p.telefono, p.correo, group_concat(l.id SEPARATOR ',') as lugares from participantes as p inner join lugares as l on l.participante=p.id where p.confirmacion is false group by p.id";
				break;
		}
		//print_r(json_encode(array($query)));
		$res = QueryMysql($query,$conex);
		if (!is_null($res)) {
			$aux=array();
			while ($obj = $res->fetch_array(MYSQLI_ASSOC)) {
				$aux[] = $obj;
			}
			print_r(json_encode(array_reverse($aux)));
			$res->close();
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