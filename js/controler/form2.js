var app = angular.module("Milo",['ngTagsInput']);
app.directive('enforceMaxTags', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModelController) {
            var maxTags = attrs.maxTags ? parseInt(attrs.maxTags, '10') : null;
            ngModelController.$validators.checkLength = function(value) { 
                if (value && maxTags && value.length > maxTags) {
                    value.splice(value.length - 1, 1);
                }
                return value;
            };
        }
   };
});
app.controller("formulario",['$q','$scope','$http','$filter',function($q,$scope,$http,$filter){
        
        var tags = [];
        function textP(element, index, array){
          var aux = element['nombre'];
          delete element['nombre'];
          element['text'] = aux;
        };
        
        $http.post('http://localhost/formularioMapa/php/consultas.php','{"accion":"consulta","search":"productos"}')
             .then(function(respuesta){
            respuesta.data.forEach(textP);
            tags = respuesta.data;
        });

        $scope.user = {};
        $scope.lugar = [];
        $scope.asiento = [];
        //$scope.productos = $scope.updateProductos();
        for (var i = 0; i < 31; i++) {
          $scope.asiento[i] = false;
        }


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

        $scope.limpiarSel = function() {
          for (var i = 0; i < 31; i++) {
            $scope.asiento[i] = false;
          }
          $scope.lugar = [];
          $scope.user.lugar = "";
        }

        $scope.seleccionaBoton = function(lug) {
          a = 0;
          b = 0;
          if ($scope.lugar.length == 0) {
            if (lug == 1 || lug == 7 || lug == 16 || lug == 23) {
              a = lug;
              b = lug + 3;
            }
            else if (lug == 6 || lug == 15 || lug == 22 || lug == 29) {
              a = lug - 2;
              b = lug + 1;
            }
            else {
              a = lug - 1;
              b = lug + 2;
            }
            for (var j = 0; j < 31; j++) {
              $scope.asiento[j] = true;
            }
            for (var i = a; i < b; i++) {
              $scope.asiento[i] = false;
            }
          }
          $scope.lugar.push(lug);
          $scope.asiento[lug] = true;
          $scope.user.lugar = $scope.lugar.join();
          console.log($scope.asiento);
        };

        $scope.loadTags = function(query) {
          /*return tagService.load(query);*/
          var deferred = $q.defer();
          deferred.resolve($filter('filter')(tags, {text: query }));
          return deferred.promise;
        };
}]);