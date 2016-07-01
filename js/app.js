var app = angular.module("angularPracticeApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../templates/assessmentParent.html'
    });
  $locationProvider.html5Mode(true);
})