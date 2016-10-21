var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
$routeProvider
        .when('/', {
          templateUrl: '/partials/login.html',
          controller: 'userController',
      })
         .when('/dashboard', {
          templateUrl: '/partials/dashboard.html',
          controller: 'dashboardController',
      })
          .when('/new_question', {
          templateUrl: '/partials/newquestion.html',
          controller: 'questionController',
      })
          .when('/question/:id', {
          templateUrl: '/partials/showquestion.html',
          controller: 'questionController',
      })
          .when('/question/:id/new', {
          templateUrl: '/partials/answerquestion.html',
          controller: 'questionController',
      })
          .otherwise({
          redirectTo: '/'
        });
});

