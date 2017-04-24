var app = angular.module("Milo",['ngTagsInput']);
app.directive('enforceMaxTags', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModelController) {
            var maxTags = attrs.maxTags ? parseInt(attrs.maxTags, '10') : null;
            ngModelController.$validators.checkLength = function(value) { 
                if (value && maxTags && value.length > maxTags) {
                    value.splice(value.length - 1, 1);
                }
                return value;
            };
        }
   };
});
app.filter('startFromGrid', function() {
  return function(input, start) {
    start = +start;
    return input.slice(start);
  }
});
app.service('serveData', [function () 
{
	return {
		qty : ""
	};
}]);