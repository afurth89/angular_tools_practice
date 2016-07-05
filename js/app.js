var app = angular.module("angularPracticeApp", ['ngRoute', 'dndLists']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../templates/createAssessmentParent.html'
    })
    .when('/takeAssessment', {
      templateUrl: '../templates/takeAssessmentParent.html'
    });
  $locationProvider.html5Mode(true);
})