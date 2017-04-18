app.controller("mapa",['$scope','$rootScope','$http','$window','serveData',function($scope,$rootScope,$http,$window,serveData){

	redirect = function(){
		$window.location.href = './ArtesanosA/ArtesaSeccA.html'
	};

	$scope.asigna = function(lugar){
		console.log(lugar);
		$rootScope.area = lugar;
		console.log(serveData.qty);
		serveData.qty = lugar;
		console.log(serveData.qty);
		if (serveData.qty == "") {
			console.log("redireccion");
			
		}
		else
		{
			console.log("no re direccion");
			redirect();
		}

		$scope.data = {
			accion : 'consulta',
			search : 'productos'
		};
		$http.post('./php/consulta.php',$scope.data)
               .then(function(respuesta){
            console.log(respuesta);
            
         });


	};
}]);