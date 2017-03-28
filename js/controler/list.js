angular.module('DemoPagineo', [])
  .controller('tablaUsuarios', ['$scope','$http',
    function($scope,$http) {
      $scope.listar = function() { 
        $consultas = {"accion":"consulta","search":"participantesReservados"};

        function nombreCom(element, index, array){
          element['nombreComp'] = "".concat(element['nombre']," ",element['appaterno']," ",element['apmaterno']);
        };
        
        $http.post('../php/consultas.php',$consultas)
             .then(function(respuesta){
          //console.log(respuesta);
          if (typeof respuesta.data.error !== 'undefined') {
            alert(respuesta.data.error);
          }else{
            respuesta.data.forEach(nombreCom);
            $scope.usuarios = respuesta.data;
            //console.log($scope.usuarios);
          }
        });
      }
      
      $scope.confirmar = function($idParticipante){
        $update = {"accion":"update","update":"confirmacion","id":$idParticipante};
        $http.post('../php/update.php',$update)
             .then(function(respuesta){
          console.log(respuesta);
          if (typeof respuesta.data.error !== 'undefined') {
            alert(respuesta.data.error);
          }else{
            alert(respuesta.data.mensaje);
          }
        });
        $scope.listar();
      };

      $scope.configPages = function() {
        $scope.pages.length = 0;
        var ini = $scope.currentPage - 4;
        var fin = $scope.currentPage + 5;
        if (ini < 1) {
          ini = 1;
          if (Math.ceil($scope.usuarios.length / $scope.pageSize) > 10)
            fin = 10;
          else
            fin = Math.ceil($scope.usuarios.length / $scope.pageSize);
        } else {
          if (ini >= Math.ceil($scope.usuarios.length / $scope.pageSize) - 10) {
            ini = Math.ceil($scope.usuarios.length / $scope.pageSize) - 10;
            fin = Math.ceil($scope.usuarios.length / $scope.pageSize);
          }
        }
        if (ini < 1) ini = 1;
        for (var i = ini; i <= fin; i++) {
          $scope.pages.push({
            no: i
          });
        }

        if ($scope.currentPage >= $scope.pages.length)
          $scope.currentPage = $scope.pages.length - 1;
      };

      $scope.setPage = function(index) {
        $scope.currentPage = index - 1;
      };
      $scope.usuarios = [];
      $scope.currentPage = 0;
      $scope.pageSize = 10;
      $scope.pages = [];

      $scope.listar();
    }
  ])

.filter('startFromGrid', function() {
  return function(input, start) {
    start = +start;
    return input.slice(start);
  }
});
var app = angular.module('plunker', []);
app.directive('input', function()
{
    return {
        restrict: 'E',
        link: function(scope, element, attrs)
        {
            console.log("hola");
        }
    }
});