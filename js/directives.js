//***************************************************************************
//ASSESSMENT - PARENT
//***************************************************************************
(function() {
  angular
    .module('angularPracticeApp')
    .directive('createAssessmentParent', function() {
      return {
        controller: "CreateAssessmentParentController",
        controllerAs: 'vm',
        templateUrl: '../partials/createAssessment/layout.html'
      }
    })
})();


//***************************************************************************
//ASSESSMENT - QUESTION LIST SIMPLE
//***************************************************************************
(function() {
  angular
    .module("angularPracticeApp")
    .directive('questionsListSimple', function() {
      return {
        scope: {
          vm: '=vmAttr'
        },
        templateUrl: '../partials/createAssessment/questionsListSimple.html'
      }
    })
})();
