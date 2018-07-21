app.controller("formulario",['$scope','$rootScope','$http','$window',function($scope,$rootScope,$http,$window){
        
        $scope.botonesLugar = [null];
        $scope.lugaresPrecio = [0];
        $scope.categoria = [null];
        $scope.categoriaNom = [null];
        $scope.precio = "$";
        $scope.seccion = $rootScope.categoria;
        $scope.user = {};
        $scope.user.seccion = $scope.seccion;
        $scope.user.comentario = "";
        $scope.user.otrosProd = "";
        $scope.cel = 0;
        $scope.tel = 0;
        $scope.lugar = [];
        $scope.tl = false;
        $scope.tc = false;
        $scope.tanque;
        /*
        
        
        var auxL = {"accion":"consulta","search":"lugaresArea","area":$scope.user.seccion};
        
        $scope.botonesOcupados = function(lug) {
          if ($.grep(lugares, function(e){ return e.index == lug; })['0'][$scope.user.seccion + lug] == null ) {
            return 0;
          }else{
            return 1;
          }
        };
        */

        var mapa = function(){
          console.log($scope.mapa);
          angular.forEach($scope.mapa,function(lugar) {
            //console.log(lugar);
            if (lugar.categoria == null) {
              $scope.botonesLugar.push(true);
            }
            else
            {
              $scope.botonesLugar.push(false);
            }
            $scope.lugaresPrecio.push(lugar.precio);
            $scope.categoria.push(false);
            $scope.categoriaNom.push(lugar.categoria)
            /*console.log($scope.botonesLugar);
            console.log($scope.lugaresPrecio);
            console.log($scope.categoria);*/
          });
          $scope.categoriaNom[1] = "Gastronomia Huasteca";
        };

        var init = function() {
          if (!$scope.user.seccion) {
            console.log("no existe");
            $scope.user.seccion = document.getElementById("seccion").value;
          }
          $scope.mapa = [];
          var req = {
            method : "POST" ,
            url :  "http://35.231.193.133/busqueda/lugaresArea" , 
            data: {
              area: $scope.user.seccion
            }
          };
          console.log(req);
          $http(req).success(function (response) {//'response' es el objeto que devuelve el servicio web
            //console.log(response);
            $scope.mapa = response;
            //console.log($scope.mapa);
            $scope.user.seccion = document.getElementById("seccion").value;
            console.log($scope.user.seccion);
            mapa();

          }).error(function (response){
            console.log(response);
            alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
          });
          
          
        };
        

        init();
   
        $scope.categoriaF = function() {
          console.log($scope.user.categoriaProd);
          console.log($scope.categoriaNom);
          for (var i = 0; i < $scope.categoriaNom.length; i++) {
            if ($scope.categoriaNom[i] == $scope.user.categoriaProd) 
            {
              console.log("si es");
              $scope.categoria[i] = true;
            }
            else
            {
              $scope.categoria[i] = false;
            }
          }
          console.log($scope.categoria);
        };

        $scope.update = function() {
          
          $scope.user.comentario = $scope.tanque + "\n" + $scope.user.comentario;
          if ($scope.user.seccion == "AA") {
            $scope.user.categoria = "Artesano";
          }
          else if ($scope.user.seccion[0] == "G") {
            $scope.user.categoria = "Gastronomo";
          }
          $scope.user.telefono = $scope.cel + " / " + $scope.tel;
          console.log($scope.user);

          var req = {
            method : "POST" ,
            url :  "http://35.231.193.133/altaParticipante" , 
            data: {
              area: $scope.user.seccion
            }
          };
          console.log(req);

          $http(req).success(function (response) {//'response' es el objeto que devuelve el servicio web
            console.log(response);
            alert("Inscripcion Completa!");
            $window.location.href = '#/Fin';

          }).error(function (response){
            console.log(response);
            alert("Ha fallado la petici\u00F3n, No se ha podido realizar su inscripcion, intentelo mas tarde. Estado HTTP:"+status);
            $window.location.href = '#/';
          });
          /*
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
          });*/
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
          
          for (var j = 0; j < $scope.lugar.length; j++) {
              console.log($scope.lugar[j].replace($scope.user.seccion, ""));
              
              
            
            $scope.botonesLugar[$scope.lugar[j].replace($scope.user.seccion, "")] = true;
            
          }
          $scope.lugar = [];
          $scope.user.lugar = "";
          $scope.precio = "$";
          //console.log($rootScope.tel);
          //console.log($rootScope.cel);
        }

        

        $scope.seleccionaaBoton = function(lug) {
          //console.log($.grep(lugares, function(e){ return e.index == lug; })['0'][$scope.user.seccion + lug]);
          console.log(lug);
          console.log($scope.botonesLugar[lug]);
          if ($scope.botonesLugar[lug]) {
            console.log("Lugar vacio");
            if (/^A.*$/.test($scope.user.seccion)) {
              var limite = 2;
            }else{
              var limite = 3;
            }
            console.log(limite);
            if ($scope.lugar.length == 0 ) {
              console.log($scope.lugar.length);
              console.log($scope.lugar);
              $scope.lugar.push($scope.user.seccion+lug);
              console.log($scope.user.seccion+lug);
              console.log($scope.lugar);
              console.log($scope.lugar.join());
              $scope.user.lugar = $scope.lugar.join();
              console.log($scope.user.lugar);
              $scope.botonesLugar[lug]=false;
              $scope.precio = "$"+$scope.lugaresPrecio[lug];
            } else if ($scope.lugar.length >=1 && $scope.lugar.length < limite) {
              console.log("validar lugar");
              console.log($scope.lugar);
              var req = {
                method : "POST" ,
                url :  "http://35.231.193.133/busqueda/validarLugar" , 
                data: {
                  buscado: $scope.user.seccion+lug,
                  asignados: $scope.lugar
                }
              };
              $http(req).success(function (response) {//'response' es el objeto que devuelve el servicio web
                console.log(response);
                if (response.asignar) 
                {
                  var auxTotal =0;
                  $scope.lugar.push($scope.user.seccion+lug);
                  for (var i = 0; i < $scope.lugar.length; i++) {
                      auxTotal += parseInt($scope.lugaresPrecio[($scope.lugar[i].replace($scope.user.seccion, ""))]);
                  }
                  console.log(auxTotal);
                  $scope.user.lugar = $scope.lugar.join();
                  $scope.precio = "$"+auxTotal;
                  $scope.botonesLugar[lug]=false;
                }
                else{
                  alert("Lugares no contig\u00FCos, le sugerimos seleccionar otro lugar");
                }

              }).error(function (response){
                console.log(response);
                alert("Ha fallado la petici\u00F3n. Estado HTTP:"+status);
              });
              
            }else{
              
              alert("Solo es posible seleccionar "+limite+" lugares m\u00E1ximo por participante");
            }
          }else{
            console.log("Lugar ocupado");
          }
          //console.log($scope.user);
          //console.log($scope.lugar);
        };
        
      
}]);

