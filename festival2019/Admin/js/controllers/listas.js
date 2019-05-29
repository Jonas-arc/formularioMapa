app.controller("listados",['$scope','$rootScope','$http','auth',function($scope,$rootScope,$http,auth){
        
    //console.log("lista general ");
    $scope.status = 0;
    
    $scope.reservado = function(seccion,estos)
    {
    	$scope.status = estos;
    	
    	var req = {
            method : "POST" ,
            //url :  "http://sonparamilo.jonathanarc.net/apirest/busqueda/participantes/estado" , 
            url :  "http://35.231.193.133/apirest/busqueda/participantes/estado" , 
            data: {
            	secction:seccion,
            	estado:estos
            }
        };
        //console.log(req);
        $http(req).success(function (response) {//'response' es el objeto que devuelve el servicio web
          //console.log(response);
          $scope.data = response;
          angular.forEach($scope.data,function(expositor) {
          	if ($scope.status == 0)
          	{
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
		    }
          });
          //console.log($scope.data);

        }).error(function (response){
          //console.log(response);
          alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
        });
        

    };

    var init = function()
    {
    	$scope.reservado("",0);
    };
    init();

    
    
    $scope.logout = function()
    {
        auth.logout();
    };

    $scope.cambioEstado = function(est,ids)
    {
    	var req = {
            method : "POST" ,
            url :  "http://sonparamilo.jonathanarc.net/apirest/actualizar/participante" , 
            data: {
            	estado:est,
            	id:ids
            }
        };
        //console.log(req);
        $http(req).success(function (response) {//'response' es el objeto que devuelve el servicio web
          //console.log(response);
          alert("El Expositor Cambio de Status exitosamente");

        }).error(function (response){
          //console.log(response);
          alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
        });
    };
    
}]);