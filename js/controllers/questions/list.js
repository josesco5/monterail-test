angular.module('questionsApp')
  .controller('QuestionsListCtrl', function ($scope, $uibModal, Questions) {

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
      // Reseting page value
      $scope.options.page = 1;

      Questions.all($scope.options)
        .then(function(data) {
          $scope.questions = data;
        });
    };

    $scope.moreQuestions = function() {
      var options = angular.copy($scope.options);
      options.page++;
      Questions.all(options)
        .then(function(data) {
          if (data.length > 0) {
            angular.forEach(data, function(value, key) {
              $scope.questions.push(value);
            });
            $scope.options.page++;
          }
        });
    };

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

    $scope.search();
  });
