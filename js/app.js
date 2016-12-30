angular
  .module('questionsApp', [
    'ui.bootstrap',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('questions',{
        url: '/',
        templateUrl: 'views/questions/list.html',
        controller: 'QuestionsListCtrl'
      })
      .state('question',{
        url: '/question/:id',
        templateUrl: 'views/questions/detail.html',
        controller: 'QuestionDetailCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });
