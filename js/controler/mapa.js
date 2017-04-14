app.controller("mapa",['$scope','$rootScope','$http','$window',function($scope,$rootScope,$http,$window){

	redirect = function(){
		$window.location.href = './ArtesanosA/ArtesaSeccA.html'
	};

	$scope.asigna = function(lugar){
		console.log(lugar);
		$rootScope.area = lugar;
		console.log($rootScope.area);
		


		$scope.data = {
			accion : 'consulta',
			search : 'productos'
		};
		$http.post('http://sonparamilo.org.mx/formulario/php/consulta.php',$scope.data)
               .then(function(respuesta){
            console.log(respuesta);
         });
	};
}]);