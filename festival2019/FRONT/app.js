var app = angular.module("Milo",['ngRoute']);
app.config(function($routeProvider) {
   $routeProvider
   .when('/' ,{templateUrl: './views/expo2019.html', controller: 'cat'})
   .when('/GastronomoA' ,{templateUrl: './views/GastronomoA.html', controller: 'formulario'})
   .when('/ZonaA' ,{templateUrl: './views/ZonaA.html', controller: ''})
   .when('/GastronomoB' ,{templateUrl: './views/GastronomoB.html', controller: 'formulario'})
   .when('/ZonaB' ,{templateUrl: './views/ZonaB.html', controller: ''})
   .when('/GastronomoC' ,{templateUrl: './views/GastronomoC.html', controller: 'formulario'})
   .when('/ZonaC' ,{templateUrl: './views/ZonaC.html', controller: ''})
   .when('/GastronomoD' ,{templateUrl: './views/GastronomoD.html', controller: 'formulario'})
   .when('/ZonaD' ,{templateUrl: './views/ZonaD.html', controller: ''})
   .when('/GastronomoE' ,{templateUrl: './views/GastronomoE.html', controller: 'formulario'})
   .when('/Artesano' ,{templateUrl: './views/Artesano.html', controller: 'formulario'})
   .when('/Fin' ,{templateUrl: './views/fin.html', controller: ''})
   .otherwise({redirectTo: '/'});
});
app.controller("primero", ['$scope','$rootScope','$http',function($scope,$rootScope,$http){
	//$scope.nombre = "Oto";
   //$scope.categoria = $rootScope.categoria;
   ////console.log($rootScope.folio);
   $scope.folio = $rootScope.folio;
}]);

