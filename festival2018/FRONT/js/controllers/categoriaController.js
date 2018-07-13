app.controller("cat",['$scope','$rootScope','$http',function($scope,$rootScope,$http){
    $scope.catego = function(ab){
       console.log("Categoria: ");
       console.log(ab);
       $rootScope.categoria = ab;
    };
}]);

