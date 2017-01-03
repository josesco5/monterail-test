angular.module('questionsApp')
  .controller('QuestionDetailCtrl', function ($scope, $state, $stateParams, $uibModal, Questions) {
    $scope.question = {};

    $scope.showProfile = function (user) {
      $uibModal.open({
        templateUrl: 'views/users/profile.html',
        controller: 'ProfileCtrl',
        size: 'lg',
        windowClass: 'profile',
        resolve: {
          profile: function() {
            return user;
          }
        }
      });
    };

    $scope.upvote = function (item) {
      item.votes++;
    };

    $scope.downvote = function (item) {
      item.votes--;
    };

    Questions.get($stateParams.id)
      .then(function(data) {
        $scope.question = data;
      }, function(error) {
        // ToDo: Display error message
        console.log('Error getting question data', error);
        $state.go('questions');
      });
  });
