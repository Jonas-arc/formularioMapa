var app = angular.module("Milo",['ngRoute']);
app.config(function($routeProvider) {
   $routeProvider
   .when('/' ,{templateUrl: './views/expo2018.html', controller: ''})
   .when('/Gastronomo' ,{templateUrl: './views/Gastronomo.html', controller: ''})
   .when('/Artesano' ,{templateUrl: './views/Artesano.html', controller: ''})
   .otherwise({redirectTo: '/'});
});
app.controller("primero", function($scope){
	$scope.nombre = "Allan";
});