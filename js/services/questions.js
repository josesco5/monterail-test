angular.module('questionsApp')
  .factory('Questions', function($filter, $q, payload) {
    var pageSize = 6;
    var questions = payload;

    return {
      all: function(options) {
        return $q(function(resolve, reject) {
          var result = $filter('limitTo')(questions, pageSize);
          resolve(result);
        });
      }
    };
  });