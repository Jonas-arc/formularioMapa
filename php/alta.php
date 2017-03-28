<?php
include 'mysql.php';
$objDatos = json_decode(file_get_contents("php://input"));

if ($objDatos->accion == 'alta') {
	$datos = (array) $objDatos;
	if ( count($datos) == 9) {
		unset($datos['accion']);
		$datos['id'] = substr(sha1($datos["name"].$datos["telefono"].$datos["email"].$datos["appaterno"]), 0,8);
		uksort($datos, "ukInsert");
		$conex = ConexionMysql();
		if (!is_null($conex)) {
			$query = "select id from participantes 
					where id like '".$datos["id"]."' or 
					(nombre like '".$datos["name"]."' and appaterno like'".$datos["appaterno"]."' and apmaterno like '".$datos["apmaterno"]."') or correo like '".$datos["email"]."'";
			$res = QueryMysql($query, $conex);
			//print_r($res->num_rows);
			if ($res->num_rows <= 0) {
				$lugares = "'".preg_replace("/,/", "','", $datos['lugar'])."'";
				unset($datos['lugar']);
				$query = "select id from lugares where id in (".$lugares.") and participante is not null ";
				//print_r($query);
				$res = QueryMysql($query, $conex);
				if ($res->num_rows <= 0) {
					$query = "LOCK TABLES lugares WRITE, participantes WRITE";
					$conex->query($query);
					$query ="Insert into Participantes (id,nombre,appaterno,apmaterno,telefono,correo,categoria,estado)
							value('".implode("','", $datos)."')";
					$conex->query($query);
					$query = "Update lugares set participante = '".$datos["id"]."' where id in (".$lugares.")";
					$conex->query($query);
					$query = "UNLOCK TABLES";
					$conex->query($query);
					print_r(json_encode(array("folio"=>$datos['id'])));
				}else{
					print_r(json_encode(array("error"=>"Lugares ocupados")));
				}
			}else{
				print_r(json_encode(array("error"=>"Usuario registrado")));
			}
		}else{
			print_r(json_encode(array("error"=>"Error de conexion")));
		}
	}else{
		print_r(json_encode(array("error"=>"Datos incompletos")));
	}
}
?>