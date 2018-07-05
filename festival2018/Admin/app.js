var app = angular.module("MiloAdmin",['ngRoute']);
app.config(function($routeProvider) {
   $routeProvider
   .when('/' ,{templateUrl: './views/login.html', controller: ''})
   .when('/Fallo' ,{templateUrl: './views/fallo.html', controller: ''})
   .when('/Expositores' ,{templateUrl: './views/expositores.html', controller: ''})
   .otherwise({redirectTo: '/'});
});
app.controller("primero", function($scope){
	$scope.nombre = "Allan";
});