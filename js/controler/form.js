app.controller("formulario",['$scope','$rootScope','$http','serveData',function($scope,$rootScope,$http,serveData){
        
        $scope.user = {};
        $scope.lugar = [];
        $scope.asiento = [];
        for (var i = 0; i < 81; i++) {
          $scope.asiento[i] = false;
        }
        console.log(serveData.qty);
 
        $scope.update = function() {
          if ($scope.user.seccion[0] == "A") {
            $scope.user.categoria = "Artesano";
          }
          else if ($scope.user.seccion[0] == "G") {
            $scope.user.categoria = "Gastronomo";
          }
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

        $scope.limpiarSel = function() {
          for (var i = 0; i < 31; i++) {
            $scope.asiento[i] = false;
          }
          $scope.lugar = [];
          $scope.user.lugar = "";
        }

        $scope.seleccionaaBoton = function(lug) {
          a = 0;
          b = 0;
          console.log($scope.user.seccion);
          console.log($scope.user.seccion[0]);
          /*if ($scope.lugar.length == 0) {
            if (lug == 1 || lug == 4 || lug == 7 || lug == 11 || lug == 14 || lug == 17 || lug == 21 || lug == 24 || lug == 27 || lug == 31 || lug == 34 || lug == 37 || lug == 41 || lug == 44 || lug == 47) {
              a = lug;
              b = lug + 2;
            }
            else if (lug == 3 || lug == 6 || lug == 10 || lug == 13 || lug == 16 || lug == 20 || lug == 23 || lug == 26 || lug == 30 || lug == 33 || lug == 36 || lug == 40 || lug == 43 || lug == 46 || lug == 50) {
              a = lug - 1;
              b = lug + 1;
            }
            else {
              a = lug - 1;
              b = lug + 2;
            }
            for (var j = 0; j < 31; j++) {
              $scope.asiento[j] = true;s
            }
            for (var i = a; i < b; i++) {
              $scope.asiento[i] = false;
            }
          }*/
          if ($scope.lugar.length >=1) {
            console.log("hay que mandar algo");
          }
          $scope.lugar.push($scope.user.seccion + lug);
          $scope.asiento[lug] = true;
          $scope.user.lugar = $scope.lugar.join();
          console.log($scope.lugar);
          console.log($scope.asiento);
        };

}]);