;(function (angular) {
  var module = angular.module('ngAnchor', [])

  module.directive('a', function () {
    return {
      restrict: 'E',
      link: function (scope, element, attrs) {
        var anchor = element[0]
        attrs.$observe('href', function (href) {
          var host = anchor.host
          if (host && host !== window.location.host) {
            anchor.target = '_blank'            
          }
        })
      }
    }
  })
})(window.angular);
