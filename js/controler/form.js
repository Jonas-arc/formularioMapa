app.controller("formulario",['$q','$scope','$rootScope','$http','$filter','serveData','$window',function($q,$scope,$rootScope,$http,$filter,serveData,$window){
        var tags = [];
        var lugares = [];
        $scope.botonesLugar = {};
        $scope.listaLugare = [];
        $scope.currentPage = 0;
        $scope.pageSize = 5;
        $scope.pages = [];

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

        function lugaresVal(element, index, array) {
          $scope.botonesLugar[element.index]= element[getUrlVars()["seccion"] + element.index] == null?true:false;
          if (element[getUrlVars()["seccion"] + element.index] !== null) {
            var x = {};
            x.lugar=element.index;
            x.producto=element[getUrlVars()["seccion"] + element.index];
            $scope.listaLugare.push(x);
          }
        }

        $http.post('../php/consultas.php',auxL)
             .then(function(respuesta){
            lugares = respuesta.data;
            lugares.forEach(lugaresVal);
            //console.log(lugares);
            //console.log($scope.botonesLugar);
            //console.log($scope.listaLugare);
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
            if(respuesta.data.error){
              bootbox.alert(respuesta.data.error);
            }
            else{
              bootbox.alert("Inscripcion Completa!");
              $window.location.href = '../finA.html?fo=' + respuesta.data.folio;
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
          if ($scope.botonesLugar[lug] ) {
            //console.log("Lugar vacio");
            if (/^A.*$/.test($scope.user.seccion)) {
              var limite = 2;
            }else{
              var limite = 3;
            }
            console.log(limite);
            if ($scope.lugar.length == 0 ) {
              $scope.lugar.push($scope.user.seccion+lug);
              $scope.user.lugar = $scope.lugar.join();
              $scope.botonesLugar[lug]=false;
            } else if ($scope.lugar.length >=1 && $scope.lugar.length < limite) {
              //console.log("validar lugar");
              var auxVal = {"accion":"consulta",
                            "search":"validaLugares",
                            "buscado":$scope.user.seccion+lug,
                            "asignados":$scope.lugar.join()};
              $http.post('../php/consultas.php',auxVal)
                   .then(function(respuesta){
                  //console.log(respuesta.data);
                  if (respuesta.data.asignar) {
                    $( "#lugarCont" ).append( '<div class="alert alert-warning" role="alert">  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>  <strong>Error!</strong> Los lugares tienen que ser contigüos!</div><script>window.setTimeout(function() {    $(".alert").fadeTo(500, 0).slideUp(500, function(){        $(this).remove();     });}, 4000);</script>' );
                    //alert("Lugares no contigüos");<span id="lugarCont"></span>
                  }else{
                    $scope.lugar.push($scope.user.seccion+lug);
                    $scope.user.lugar = $scope.lugar.join();
                    $scope.botonesLugar[lug]=false;
                  }
              });
            }else{
              $( "#lugarCont" ).append( '<div class="alert alert-info" role="alert">  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>  <strong>Solo es posible seleccionar '+limite+' lugares máximo por participante</strong></div><script>window.setTimeout(function() {    $(".alert").fadeTo(500, 0).slideUp(500, function(){        $(this).remove();     });}, 4000);</script>' );
            }
          }else{
            //console.log("Lugar ocupado");
          }
          //console.log($scope.user);
          //console.log($scope.lugar);
        };

      $scope.configPages = function() {
        $scope.pages.length = 0;
        var ini = $scope.currentPage - 4;
        var fin = $scope.currentPage + 5;
        if (ini < 1) {
          ini = 1;
          if (Math.ceil($scope.listaLugare.length / $scope.pageSize) > 10)
            fin = 10;
          else
            fin = Math.ceil($scope.listaLugare.length / $scope.pageSize);
        } else {
          if (ini >= Math.ceil($scope.listaLugare.length / $scope.pageSize) - 10) {
            ini = Math.ceil($scope.listaLugare.length / $scope.pageSize) - 10;
            fin = Math.ceil($scope.listaLugare.length / $scope.pageSize);
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
}]);

function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}