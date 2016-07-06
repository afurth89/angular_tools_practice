var app = angular.module("angularPracticeApp", ['ngRoute', 'dndLists', 'nvd3']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../templates/createAssessmentParent.html'
    })
    .when('/takeAssessment', {
      templateUrl: '../templates/takeAssessmentParent.html'
    })
    .when('/viewResults', {
      templateUrl: '../templates/viewResults.html'
    })
  $locationProvider.html5Mode(true);
})