angular.module('questionsApp')
  .factory('Questions', function($filter, $q, payload) {
    var pageSize = 6;
    var questions = payload;

    return {
      all: function(options) {
        return $q(function(resolve, reject) {
          var orderField;
          if (options.orderBy == 'recent') {
            orderField = 'createdAt';
          } else {
            orderField = 'votes';
          }
          var ordered = $filter('orderBy')(questions, orderField, true);
          var filtered = $filter('filter')(ordered, {title: options.query});
          var result = $filter('limitTo')(filtered, pageSize);
          resolve(result);
        });
      },
      get: function(questionId) {
        return $q(function(resolve, reject) {
          var result = $filter('filter')(questions, {id: questionId}, function(actual, expected) {
            return actual == expected;
          });
          if (result.length > 0) {
            resolve(result[0]);
          } else {
            reject({status: 404, message: 'Not found'});
          }
        })
      }
    };
  });
