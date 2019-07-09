app.controller("catEsp",['$scope','$rootScope','$http',function($scope,$rootScope,$http){
    $scope.catego = function(ab){

       console.log("Categoria: ");
       console.log(ab);
       $rootScope.categoria = $rootScope.categoria + ab;
       console.log($rootScope.categoria);
    };
    var init = function(){
    	$scope.disponible = [];
      if (!$rootScope.categoria)
      {
        $rootScope.categoria = document.getElementById("seccion").value;
      };
      var req1 = {
              method : "POST" ,
              url :  "http://api.jonathanarc.net/busqueda/seccion" , 
              data: {
                seccion: "A1"
              }
          };
      var req2 = {
              method : "POST" ,
              url :  "http://api.jonathanarc.net/busqueda/seccion" , 
              data: {
                seccion: "A1"
              }
          };
      var req3 = {
              method : "POST" ,
              url :  "http://api.jonathanarc.net/busqueda/seccion" , 
              data: {
                seccion: "A1"
              }
          };
      var req4 = {
              method : "POST" ,
              url :  "http://api.jonathanarc.net/busqueda/seccion" , 
              data: {
                seccion: "A1"
              }
          };
      var req5 = {
              method : "POST" ,
              url :  "http://api.jonathanarc.net/busqueda/seccion" , 
              data: {
                seccion: "A1"
              }
          };
      var req6 = {
              method : "POST" ,
              url :  "http://api.jonathanarc.net/busqueda/seccion" , 
              data: {
                seccion: "A1"
              }
          };
      if ($rootScope.categoria == "A") 
      {
      	 var req1 = {
              method : "POST" ,
              url :  "http://api.jonathanarc.net/busqueda/seccion" , 
              data: {
                seccion: "A1"
              }
          };
          var req2 = {
              method : "POST" ,
              url :  "http://api.jonathanarc.net/busqueda/seccion" , 
              data: {
                seccion: "A2"
              }
          };
          var req3 = {
              method : "POST" ,
              url :  "http://api.jonathanarc.net/busqueda/seccion" , 
              data: {
                seccion: "A3"
              }
          };
          var req4 = {
              method : "POST" ,
              url :  "http://api.jonathanarc.net/busqueda/seccion" , 
              data: {
                seccion: "A4"
              }
          };
          var req5 = {
              method : "POST" ,
              url :  "http://api.jonathanarc.net/busqueda/seccion" , 
              data: {
                seccion: "A5"
              }
          };
          var req6 = {
              method : "POST" ,
              url :  "http://api.jonathanarc.net/busqueda/seccion" , 
              data: {
                seccion: "A6"
              }
          };
          
        }else if ($rootScope.categoria == "B") 
        {
        var req1 = {
              method : "POST" ,
              url :  "http://api.jonathanarc.net/busqueda/seccion" , 
              data: {
                seccion: "B1"
              }
          };
          var req2 = {
              method : "POST" ,
              url :  "http://api.jonathanarc.net/busqueda/seccion" , 
              data: {
                seccion: "B2"
              }
          };
          var req3 = {
              method : "POST" ,
              url :  "http://api.jonathanarc.net/busqueda/seccion" , 
              data: {
                seccion: "B3"
              }
          };

        }else if ($rootScope.categoria == "D") 
        {
        var req1 = {
              method : "POST" ,
              url :  "http://api.jonathanarc.net/busqueda/seccion" , 
              data: {
                seccion: "D1"
              }
          };
          var req2 = {
              method : "POST" ,
              url :  "http://api.jonathanarc.net/busqueda/seccion" , 
              data: {
                seccion: "D2"
              }
          };
          
        };
        $http(req1).success(function (response) {//'response' es el objeto que devuelve el servicio web
            console.log(response);
            $scope.disponible[0] = response.asignar;
            console.log($scope.disponible[0]);
            console.log($rootScope.categoria);

          }).error(function (response){
            console.log(response);
            alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
          });

        $http(req2).success(function (response) {//'response' es el objeto que devuelve el servicio web
            console.log(response);
            $scope.disponible[1] = response.asignar;
            
            console.log($scope.disponible[1]);

          }).error(function (response){
            console.log(response);
            alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
          });

        $http(req3).success(function (response) {//'response' es el objeto que devuelve el servicio web
            console.log(response);
            $scope.disponible[2] = response.asignar;
            console.log($scope.disponible[2]);

          }).error(function (response){
            console.log(response);
            alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
          });

        $http(req4).success(function (response) {//'response' es el objeto que devuelve el servicio web
            console.log(response);
            $scope.disponible[3] = response.asignar;
            console.log($scope.disponible[3]);

          }).error(function (response){
            console.log(response);
            alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
          });

        $http(req5).success(function (response) {//'response' es el objeto que devuelve el servicio web
            console.log(response);
            $scope.disponible[4] = response.asignar;
            console.log($scope.disponible[4]);

          }).error(function (response){
            console.log(response);
            alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
          });

        $http(req6).success(function (response) {//'response' es el objeto que devuelve el servicio web
            console.log(response);
            $scope.disponible[5] = response.asignar;
            console.log($scope.disponible[5]);

          }).error(function (response){
            console.log(response);
            alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
          });
        

        
    };
    init();
}]);

