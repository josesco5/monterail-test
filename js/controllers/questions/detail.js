angular.module('questionsApp')
  .controller('QuestionDetailCtrl', function ($scope) {
    $scope.question = {
      title: 'Will insulin make my patient gain weight?',
      description: 'All my patients with diabetes should see an opthalmologist yearly for a dialated eye \
                    examination - begining at diagnosis inpeople with type 2 diabetes, and after 5 years in \
                    people with type 1 diabetes after puberty. Patients with know eye disease, symptoms \
                    of blurred vision in one eye, or blind spots may need to see their opthalmologist\
                    more frequently.',
      author: {
        name: 'Eva',
        avatarUrl: 'http://lorempixel.com/124/125/business/7/cc'
      },
      createdAt: '2016-04-14T01:17:58Z',
      votes: 19,
      summary: {
        relatedDiscussion: 1,
        peersInvolved: 6,
        conversations: 3
      },
      answers: [
        {
          text: 'Numbers or tingling in your feet should be reported to your doctor at your regular visits',
          createdAt: '2016-04-14T01:17:58Z',
          author: {
            name: 'Patricia',
            avatarUrl: 'http://lorempixel.com/124/125/business/7/cc'
          },
          votes: 8,
          comments: [
            {
              text: 'You should check your feet daily for redness, caluses, cracks or skin breakdown.',
              createdAt: '2016-04-16T01:17:58Z',
              author: {
                name: 'David',
                avatarUrl: 'http://lorempixel.com/124/125/business/9/cc'
              },
              votes: 2
            }
          ]
        },
        {
          text: 'When your blood sugar is low, your body gives out signs that you need \
                food. Different people have different symptoms. You will learn to know \
                your symptoms.',
          createdAt: '2016-04-16T01:17:58Z',
          author: {
            name: 'Josephs',
            avatarUrl: 'http://lorempixel.com/124/125/business/9/cc'
          },
          votes: -3
        }
      ]
    };
  });
