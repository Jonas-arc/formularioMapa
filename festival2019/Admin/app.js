var app = angular.module("MiloAdmin",['ngRoute','ngCookies']);
app.config(function($routeProvider) {
   $routeProvider
   .when('/' ,{templateUrl: './views/login.html', controller: 'loginController'})
   .when('/Fallo' ,{templateUrl: './views/fallo.html', controller: ''})
   .when('/Expositores' ,{templateUrl: './views/expositores.html', controller: 'homeController'})
   .otherwise({redirectTo: '/'});
});
app.factory("auth", function($cookies,$cookieStore,$location)
{
    return{
        login : function(username, password)
        {
            //creamos la cookie con el nombre que nos han pasado
            $cookies.username = username,
            $cookies.password = password;
            //mandamos a la home
            $location.path("/Expositores");
        },
        logout : function()
        {
            //al hacer logout eliminamos la cookie con $cookieStore.remove
            $cookieStore.remove("username"),
            $cookieStore.remove("password");
            //mandamos al login
            $location.path("/");
        },
        checkStatus : function()
        {
            //creamos un array con las rutas que queremos controlar
            var rutasPrivadas = ["/Expositores","/"];
            if(this.in_array($location.path(),rutasPrivadas) && typeof($cookies.username) == "undefined")
            {
                $location.path("/");
            }
            //en el caso de que intente acceder al login y ya haya iniciado sesión lo mandamos a la home
            if(this.in_array("/",rutasPrivadas) && typeof($cookies.username) != "undefined")
            {
                $location.path("/Expositores");
            }
        },
        in_array : function(needle, haystack)
        {
            var key = '';
            for(key in haystack)
            {
                if(haystack[key] == needle)
                {
                    return true;
                }
            }
            return false;
        }
    }
});
 
//creamos el controlador pasando $scope y $http, así los tendremos disponibles
app.controller('loginController',['$scope','auth','$http',function($scope,auth,$http) 
{
    //la función login que llamamos en la vista llama a la función
    //login de la factoria auth pasando lo que contiene el campo
    //de texto del formulario
    $scope.login = function()
    {
    	var req = {
            method : "POST" ,
            url :  "http://sonparamilo.jonathanarc.net/apirest/admin/login" , 
            data: {
              user : $scope.username,
              pass : $scope.password
            }
        };
        console.log(req);
        $http(req).success(function (response) {//'response' es el objeto que devuelve el servicio web
          console.log(response);
          
          auth.login($scope.username, $scope.password);          

        }).error(function (response){
          console.log(response);
          alert("Ha fallado la petici\u00F3n. No puedes iniciar secion en este momento. Estado HTTP:"+status);
        });
        
    };
 
}]);
 
 
//creamos el controlador pasando $scope y auth
app.controller('homeController', function($scope, $cookies, auth) 
{
    //devolvemos a la vista el nombre del usuario
    $scope.username = $cookies.username;
    $scope.password = $cookies.password;
    //la función logout que llamamos en la vista llama a la función
    //logout de la factoria auth
    $scope.logout = function()
    {
        auth.logout();
    }
 
});
 
 
//mientras corre la aplicación, comprobamos si el usuario tiene acceso a la ruta a la que está accediendo
app.run(function($rootScope, auth)
{
    //al cambiar de rutas
    $rootScope.$on('$routeChangeStart', function()
    {
        //llamamos a checkStatus, el cual lo hemos definido en la factoria auth
        //la cuál hemos inyectado en la acción run de la aplicación
        auth.checkStatus();
    })
})
app.controller("primero", function($scope){
	//$scope.nombre = "Allan";
});