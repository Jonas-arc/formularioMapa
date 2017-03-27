<?php
include 'mysql.php';
$objDatos = json_decode(file_get_contents("php://input"));

if ($objDatos->accion == 'consulta') {
	$datos = (array) $objDatos;
	$conex = ConexionMysql();
	if (!is_null($conex)){
		switch ($datos['search']) {
			case 'lugaresOcupados':
				$query = "select id from lugares where participante is not null";
				break;
			case 'lugaresAreaOcupados':
				$query = "select id from lugares where participante is not null and id like '".$datos['area']."'";
				break;
			case 'participantes':
				$query = "select * from participante";
				break;
			case 'participantesConfirmados':
				$query = "select * from participante where confirmacion is true";
				break;
			case 'participantesReservados':
				$query = "select * from participante where confirmacion is false";
				break;
		}
		$res = QueryMysql($query,$conex);
		if (!is_null($res)) {
			$aux=array();
			while ($obj = $res->fetch_array(MYSQLI_ASSOC)) {
				$aux[] = $obj;
			}
			print_r(json_encode(array_reverse($aux)));
			$res->close();
		}else{
			// echo "Error en el query";
		}
	}else{
		// echo "Error de conexion";
	}
}else{

}
?>