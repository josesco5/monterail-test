angular.module('questionsApp')
  .controller('QuestionsListCtrl', function ($scope, Questions) {

    $scope.questions = [];

    Questions.all()
      .then(function(data) {
        $scope.questions = data;
      });
  });
