angular.module('questionsApp')
  .filter('absoluteValue', function () {
    return function(num) {
      return Math.abs(num);
    }
  });