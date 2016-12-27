angular.module('questionsApp')
  .controller('QuestionsListCtrl', function ($scope, Questions) {

    $scope.questions = [];

    $scope.options = {
      query: '',
      orderBy: 'recent',
      page: 1
    };

    $scope.isOrderedByRecent = function() {
      return $scope.options.orderBy === 'recent';
    };

    $scope.isOrderedByHot = function() {
      return $scope.options.orderBy === 'hot';
    };

    $scope.orderBy = function(criteria) {
      $scope.options.orderBy = criteria;
      $scope.search();
    };

    $scope.search = function() {
      Questions.all($scope.options)
        .then(function(data) {
          $scope.questions = data;
        });
    };

    $scope.search();
  });
