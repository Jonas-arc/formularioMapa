var app = angular.module("Milo",[]);
app.controller("formulario",['$scope','$http',function($scope,$http){
        
        $scope.user = {};
        $scope.lugar = [];
 
        $scope.update = function() {
          $scope.user.accion = "alta";
          console.log($scope.user);
          $http.post('./php/alta.php',$scope.user)
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

        $scope.seleccionaBoton = function(lug) {
          $scope.lugar.push(lug);
          $scope.user.lugar = $scope.lugar.join();
        };

}]);