app.directive('isNumber',['$compile','$rootScope', function($compile,$rootScope) {
    return {
      restrict: 'E',
      scope: {
        myNgModel: '='
      },
      compile: function(element, attrs) {

                 var e = angular.element('<input type="Text" min="10" max="14" class="formu" name="telefonoCel" ng-blur="errore()" ng-model="'+attrs.myNgModel+'"  required/>');
                 element.append(e);

                 return function (scope, element, attrs) {
                   $compile(e)(scope);

                   var maxLength = 14;
                   // var hasDecimal = false;
                   var enableNegative = false;

                   if (attrs.enableNegative) {
                     enableNegative = (attrs.enableNegative === 'true');
                   }

                   if (attrs.max) {
                     maxLength = attrs.max;
                   }

                   if (attrs.value) {
                     if (maxLength < attrs.value.length) {
                       attrs.value = attrs.value.substring(0, maxLength);
                     }
                     scope.myNgModel = attrs.value;
                     //console.log(scope.myNgModel);
                   }


                   scope.$watch('myNgModel', function(newValue, oldValue) {
                     if (newValue !== undefined) {

                       var arr = String(newValue).split('');

                       if (arr.length === 0) {
                         return;
                       }

                       if (enableNegative && arr.length === 1 && arr[0] === '-') {
                         return;
                       }

                       if (isNaN(newValue) || (arr.length > maxLength) || (arr.indexOf('.') !== -1)) {
                         scope.myNgModel = oldValue;
                         //console.log(scope.myNgModel);
                       }
                       console.log("celular");
                       $rootScope.cel = scope.myNgModel;
                       console.log($rootScope.cel);
                     }
                   });
                 };

           }
    };
  }]);