angular.module('questionsApp')
  .controller('QuestionsListCtrl', function ($scope) {

    $scope.questions = [
      {
        title: 'Will insulin make my patient gain weight?',
        author: {
          name: 'Eva',
          avatarUrl: 'http://lorempixel.com/124/125/business/7/cc'
        },
        createdAt: '2016-04-14T01:17:58Z',
        summary: {
          relatedDiscussion: 1,
          peersInvolved: 6,
          conversations: 3
        }
      },
      {
        title: 'Vegan diet in diabetes treatment?',
        author: {
          name: 'Andrew',
          avatarUrl: 'http://lorempixel.com/124/125/business/10/cc'
        },
        createdAt: '2016-11-07T23:44:23Z',
        summary: {
          relatedDiscussion: 2,
          peersInvolved: 9,
          conversations: 5
        }
      },
      {
        title: 'Vegan diet to stop diabetes progress?',
        author: {
          name: 'Joseph',
          avatarUrl: 'http://lorempixel.com/125/125/business/1/cc'
        },
        createdAt: '2016-10-08T12:45:12Z',
        summary: {
          relatedDiscussion: 5,
          peersInvolved: 4,
          conversations: 0
        }
      }
    ];
  });
