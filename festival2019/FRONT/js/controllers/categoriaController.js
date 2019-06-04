app.controller("cat",['$scope','$rootScope','$http',function($scope,$rootScope,$http){
    $scope.catego = function(ab){
       //console.log("Categoria: ");
       //console.log(ab);
       $rootScope.categoria = ab;
    };
    var init = function(){
    	$scope.disponible = [];
    	var req1 = {
            method : "POST" ,
            url :  "http://sonparamilo.jonathanarc.net/apirest/busqueda/seccion" , 
            data: {
              seccion: "AA"
            }
        };
        var req2 = {
            method : "POST" ,
            url :  "http://sonparamilo.jonathanarc.net/apirest/busqueda/seccion" , 
            data: {
              seccion: "GA"
            }
        };
        var req3 = {
            method : "POST" ,
            url :  "http://sonparamilo.jonathanarc.net/apirest/busqueda/seccion" , 
            data: {
              seccion: "GB"
            }
        };
        var req4 = {
            method : "POST" ,
            url :  "http://sonparamilo.jonathanarc.net/apirest/busqueda/seccion" , 
            data: {
              seccion: "GC"
            }
        };
        var req5 = {
            method : "POST" ,
            url :  "http://sonparamilo.jonathanarc.net/apirest/busqueda/seccion" , 
            data: {
              seccion: "GD"
            }
        };
        var req6 = {
            method : "POST" ,
            url :  "http://sonparamilo.jonathanarc.net/apirest/busqueda/seccion" , 
            data: {
              seccion: "GE"
            }
        };

        $http(req1).success(function (response) {//'response' es el objeto que devuelve el servicio web
            //console.log(response);
            $scope.disponible[0] = response.asignar;
            //console.log($scope.disponible[0]);

          }).error(function (response){
            //console.log(response);
            alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
          });

        $http(req2).success(function (response) {//'response' es el objeto que devuelve el servicio web
            //console.log(response);
            $scope.disponible[1] = response.asignar;
            
            //console.log($scope.disponible[1]);

          }).error(function (response){
            //console.log(response);
            alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
          });

        $http(req3).success(function (response) {//'response' es el objeto que devuelve el servicio web
            //console.log(response);
            $scope.disponible[2] = response.asignar;
            //console.log($scope.disponible[2]);

          }).error(function (response){
            //console.log(response);
            alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
          });

        $http(req4).success(function (response) {//'response' es el objeto que devuelve el servicio web
            //console.log(response);
            $scope.disponible[3] = response.asignar;
            //console.log($scope.disponible[3]);

          }).error(function (response){
            //console.log(response);
            alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
          });

        $http(req5).success(function (response) {//'response' es el objeto que devuelve el servicio web
            //console.log(response);
            $scope.disponible[4] = response.asignar;
            //console.log($scope.disponible[4]);

          }).error(function (response){
            //console.log(response);
            alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
          });


        $http(req6).success(function (response) {//'response' es el objeto que devuelve el servicio web
            //console.log(response);
            $scope.disponible[5] = response.asignar;
            //console.log($scope.disponible[5]);

          }).error(function (response){
            //console.log(response);
            alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
          });

        
    };
    //init();
}]);

