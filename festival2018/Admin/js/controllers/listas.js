app.controller("listados",['$scope','$rootScope','$http','auth',function($scope,$rootScope,$http,auth){
        
    console.log("lista general ");
    $scope.status = 0;
    
    $scope.reservado = function()
    {
    	$scope.status = 0;
    	var req = {
            method : "POST" ,
            url :  "http://35.231.193.133/busqueda/participantes/estado" , 
            data: {
            	secction:"",
            	estado:0
            }
        };
        console.log(req);
        $http(req).success(function (response) {//'response' es el objeto que devuelve el servicio web
          console.log(response);
          $scope.data = response;
          angular.forEach($scope.data,function(expositor) {

          	
	        if ((new Date(expositor.fecha).getMonth())==(new Date().getMonth())) 
	        {
	        	if ((new Date(expositor.fecha).getDate())==(new Date().getDate())) 
	        	{
	        		expositor.incrip = "hoy";
	        	}
	        	else
		        {
		        	expositor.incrip = "no";
		        }
	        }
	        else
	        {
	        	expositor.incrip = "no";
	        }
          });
          console.log($scope.data);

        }).error(function (response){
          console.log(response);
          alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
        });
        

    };

    var init = function()
    {
    	$scope.reservado();
    };
    init();

    $scope.confirmados = function()
    {
    	$scope.status = 1;
    	var req = {
            method : "POST" ,
            url :  "http://35.231.193.133/busqueda/participantes/estado" , 
            data: {
            	secction:"",
            	estado:1
            }
        };
        console.log(req);
        $http(req).success(function (response) {//'response' es el objeto que devuelve el servicio web
          console.log(response);
          $scope.data = response;

        }).error(function (response){
          console.log(response);
          alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
        });
    };

    $scope.pagados = function()
    {
    	$scope.status = 2;
    	var req = {
            method : "POST" ,
            url :  "http://35.231.193.133/busqueda/participantes/estado" , 
            data: {
            	secction:"",
            	estado:2
            }
        };
        console.log(req);
        $http(req).success(function (response) {//'response' es el objeto que devuelve el servicio web
          console.log(response);
          $scope.data = response;

        }).error(function (response){
          console.log(response);
          alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
        });
    };

    $scope.rechazados = function()
    {
    	$scope.status = 3;
    	var req = {
            method : "POST" ,
            url :  "http://35.231.193.133/busqueda/participantes/estado" , 
            data: {
            	secction:"",
            	estado:3
            }
        };
        console.log(req);
        $http(req).success(function (response) {//'response' es el objeto que devuelve el servicio web
          console.log(response);
          $scope.data = response;

        }).error(function (response){
          console.log(response);
          alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
        });
    }
    
    $scope.logout = function()
    {
        auth.logout();
    };
    
}]);