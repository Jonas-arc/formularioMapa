app.controller("formulario",['$q','$scope','$rootScope','$http','$filter','serveData','$window',function($q,$scope,$rootScope,$http,$filter,serveData,$window){
        var tags = [];
        var lugares = [];
        $scope.botonesLugar = {};
        function textP(element, index, array){
          var aux = element['nombre'];
          delete element['nombre'];
          element['text'] = aux;
        };
         
        $http.post('../php/consultas.php','{"accion":"consulta","search":"productos"}')
             .then(function(respuesta){
            respuesta.data.forEach(textP);
            tags = respuesta.data;
        });
        $scope.user = {};
        $scope.user.seccion=getUrlVars()["seccion"];
        var auxL = {"accion":"consulta","search":"lugaresArea","area":$scope.user.seccion};

        $scope.botonesOcupados = function(lug) {
          if ($.grep(lugares, function(e){ return e.index == lug; })['0'][$scope.user.seccion + lug] == null ) {
            return 0;
          }else{
            return 1;
          }
        };

        $scope.pruebabotoenes = function(lug) {
          console.log($scope.botonesLugar[lug]);
        };

        function lugaresVal(element, index, array) {
          $scope.botonesLugar[element.index]= element[getUrlVars()["seccion"] + element.index] == null?true:false;
        }

        $http.post('../php/consultas.php',auxL)
             .then(function(respuesta){
            lugares = respuesta.data;
            lugares.forEach(lugaresVal);
            console.log(lugares);
            console.log($scope.botonesLugar);
        });

        $scope.cel = "";
        $scope.tel = "";
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
          $scope.user.telefono = $scope.cel + " / " + $scope.tel;
          var aux = ""
          for (var i in $scope.user.tags) {
            console.log(i);
            if (i != 0) {
              aux = aux.concat(",");
            }
            aux = aux.concat($scope.user.tags[i]['text']);
          }
          $scope.user['producto'] = aux;
          $scope.user.accion = "alta";
          delete $scope.user.tags;
          delete $scope.user.seccion;
          console.log($scope.user);
          $http.post('../php/alta.php',$scope.user)
               .then(function(respuesta){
            console.log(respuesta);
            if(response.error){
              bootbox.alert(respuesta.error);
            }
            else{
              bootbox.alert("Inscripcion Completa!");
              $window.location.href = './finA.html?fo=' + respuesta.folio;
            }
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

        $scope.loadTags = function(query) {
          /*return tagService.load(query);*/
          var deferred = $q.defer();
          deferred.resolve($filter('filter')(tags, {text: query }));
          return deferred.promise;
        };

        $scope.seleccionaaBoton = function(lug) {
          //console.log($.grep(lugares, function(e){ return e.index == lug; })['0'][$scope.user.seccion + lug]);
          if ($.grep(lugares, function(e){ return e.index == lug; })['0'][$scope.user.seccion + lug] == null ) {
            console.log("Lugar vacio");
            if ($scope.lugar.length >=1) {
              console.log("validar lugar");
              var auxVal = {"accion":"consulta",
                            "search":"validaLugares",
                            "buscado":$scope.user.seccion+lug,
                            "asignados":$scope.lugar.join()};
              $http.post('../php/consultas.php',auxVal)
                   .then(function(respuesta){
                  console.log(respuesta.data);
                  if (respuesta.data.asignar) {
                    alert("Lugares no contigüos");
                  }else{
                    $scope.lugar.push($scope.user.seccion+lug);
                    $scope.user.lugar = $scope.lugar.join();
                  }
              });
            }else{
              console.log("asignacion");
              $scope.lugar.push($scope.user.seccion+lug);
              $scope.user.lugar = $scope.lugar.join();
            }
          }else{
            console.log("Lugar ocupado");
          }
        };

}]);

function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}