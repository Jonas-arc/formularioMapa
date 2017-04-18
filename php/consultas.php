<?php
include 'mysql.php';
$objDatos = json_decode(file_get_contents("php://input"));

if ($objDatos->accion == 'consulta') {
	$datos = (array) $objDatos;
	$conex = ConexionMysql();
	$conex->set_charset("utf8");
	if (!is_null($conex)){
		switch ($datos['search']) {
			case 'productos':
				$query = "select * from producto";
				break;
			case 'lugaresArea':
				$query = "select l.id as id, group_concat(pro.nombre SEPARATOR ',') as productos from participantes as p right join lugares as l on l.participante=p.id left join producto_participante as pp on p.id=pp.idParticipante left join producto as pro on pro.nombre=pp.idProducto where l.id like '".$datos['area']."%' group by l.id";
				//print_r($query);
				$res = QueryMysql($query,$conex);
				if (!is_null($res)) {
					$aux=array();
					while ($obj = $res->fetch_array(MYSQLI_ASSOC)) {
						$aux[] =array($obj['id']=> $obj['productos']);
					}
					print_r(json_encode($aux));
					$res->close();
				}else{
					print_r(json_encode(array("error"=>"Consulta no valida")));
				}
				return;
				break;
			case 'participantes':
				$query = "select p.id, p.nombre, p.appaterno, p.apmaterno, p.telefono, p.correo, group_concat(l.id SEPARATOR ',') as lugares from participantes as p inner join lugares as l on l.participante=p.id group by p.id";
				$res = QueryMysql($query,$conex);
				if (!is_null($res)) {
					$aux=array();
					$aux2=array();
					while ($obj = $res->fetch_array(MYSQLI_ASSOC)) {
						$aux[$obj['id']] = $obj;
					}
					$query = "select p.id as id, group_concat(pro.nombre SEPARATOR ',') as productos from participantes as p inner join producto_participante as pp on p.id=pp.idParticipante inner join producto as pro on pro.nombre=pp.idProducto group by p.id";
					$res = QueryMysql($query,$conex);
					while ($obj = $res->fetch_array(MYSQLI_ASSOC)) {
						$aux2[$obj['id']] = $obj;
						unset($aux2[$obj['id']]['id']);
					}
					$aux = array_merge_recursive($aux,$aux2);
					print_r(json_encode(array_reverse(array_values($aux))));
					$res->close();
				}else{
					print_r(json_encode(array("error"=>"Consulta no valida")));
				}
				return;
				break;
			case 'participantesConfirmados':
				$query = "select p.id, p.nombre, p.appaterno, p.apmaterno, p.telefono, p.correo, group_concat(l.id SEPARATOR ',') as lugares from participantes as p inner join lugares as l on l.participante=p.id where p.confirmacion is true group by p.id";
				break;
			case 'participantesReservados':
				$query = "select p.id, p.nombre, p.appaterno, p.apmaterno, p.telefono, p.correo, group_concat(l.id SEPARATOR ',') as lugares from participantes as p inner join lugares as l on l.participante=p.id where p.confirmacion is false group by p.id";
				break;
			case 'validaLugares':
				$query = "select * from validarLugar where lugarSelect in ("."'".preg_replace("/,/", "','", $datos['asignados'])."'".") and lugarPosible like '".$datos['buscado']."'";
				$res = QueryMysql($query,$conex);
				if ($res->num_rows <= 0) {
					print_r(json_encode(array("asignar"=>true)));
				}else{
					print_r(json_encode(array("asignar"=>false)));
				}
				return;
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