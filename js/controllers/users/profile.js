angular.module('questionsApp')
  .controller('ProfileCtrl', function ($scope, $uibModalInstance, profile) {
    $scope.profile = profile;

    $scope.close = function() {
      $uibModalInstance.close();
    }
  });