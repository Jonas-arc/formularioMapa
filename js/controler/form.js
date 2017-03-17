var app = angular.module("Milo",[]);
app.controller("formulario",['$scope','$http',function($scope,$http){
        
        $scope.user = {};
 
        $scope.update = function() {
          $scope.user.accion = "consulta";
          console.log($scope.user);
          $http.post('./php/pruebasConcepto.php',$scope.user)
               .then(function(respuesta){
            console.log(respuesta);
          });
        };
 
        $scope.reset = function(form) {
          $scope.user = {};
          if (form) {
            form.$setPristine();
            form.$setUntouched();
          }
        };
 
        $scope.reset();

}]);