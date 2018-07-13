var app = angular.module("Milo",['ngRoute']);
app.config(function($routeProvider) {
   $routeProvider
   .when('/' ,{templateUrl: './views/expo2018.html', controller: ''})
   .when('/GastronomoA' ,{templateUrl: './views/GastronomoA.html', controller: ''})
   .when('/GastronomoB' ,{templateUrl: './views/GastronomoB.html', controller: ''})
   .when('/GastronomoC' ,{templateUrl: './views/GastronomoC.html', controller: ''})
   .when('/GastronomoD' ,{templateUrl: './views/GastronomoD.html', controller: ''})
   .when('/GastronomoE' ,{templateUrl: './views/GastronomoE.html', controller: ''})
   .when('/Artesano' ,{templateUrl: './views/Artesano.html', controller: ''})
   .when('/Fin' ,{templateUrl: './views/fin.html', controller: ''})
   .otherwise({redirectTo: '/'});
});
app.controller("primero", ['$scope','$rootScope','$http',function($scope,$rootScope,$http){
	$scope.nombre = "Allan";
   //$scope.categoria = $rootScope.categoria;
}]);

