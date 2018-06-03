<?php
function Redirect($url)
{
    header('Location: ' . $url);
    //exit();
}

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
		case 'otro':
			return 9;
		default:
			return 10;
	}
}

function ukInsert($a,$b){
	return (ordenInsert($a)-ordenInsert($b));
}
$objDatos = json_decode(file_get_contents("php://input"));
// print_r($objDatos);
if ($objDatos->accion == 'consulta') {
	$conex = ConexionMysql();
	if (!is_null($conex)){
		$res = QueryMysql("SELECT * FROM Participantes",$conex);
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
}elseif ($objDatos->accion == 'alta') {
	$datos = (array) $objDatos;
	if ( count($datos) == 10) {
		unset($datos['accion']);
		$datos['id'] = substr(sha1($datos["name"].$datos["telefono"].$datos["email"].$datos["appaterno"]), 0,8);
		uksort($datos, "ukInsert");
		$query = "Insert into Participantes value('".implode("','", $datos)."')";
		$conex = ConexionMysql();
		if (!is_null($conex)) {
			$res = QueryMysql($query, $conex);
			if (!is_null($res)) {
				print_r(json_encode(array("folio"=>$datos['id'])));
			}else{
				print_r(json_encode(array("error"=>"Usuario registrado")));
			}
		}else{
			print_r(json_encode(array("error"=>"Error de conexion")));
		}
	}else{
		print_r(json_encode(array("error"=>"Datos incompletos")));
	}
}else{
	echo '{ redir:"http://sonparamilo.org.mx/"}';
}
?>