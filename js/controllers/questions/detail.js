angular.module('questionsApp')
  .controller('QuestionDetailCtrl', function ($scope, $state, $stateParams, Questions) {
    $scope.question = {};

    Questions.get($stateParams.id)
      .then(function(data) {
        $scope.question = data;
      }, function(error) {
        // ToDo: Display error message
        console.log('Error getting question data', error);
        $state.go('questions');
      });
  });
