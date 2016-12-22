angular
  .module('questionsApp', [
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('questions',{
        url: '/',
        templateUrl: 'views/questions/list.html',
        controller: 'QuestionsListCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });
