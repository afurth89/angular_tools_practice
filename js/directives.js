//***************************************************************************
//ASSESSMENT - PARENT
//***************************************************************************
(function() {
  angular
    .module('angularPracticeApp')
    .directive('assessmentParent', function() {
      return {
        controller: "AssessmentParentController",
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

//***************************************************************************
//ASSESSMENT - QUESTION LIST ITEM TYPE
//***************************************************************************
(function() {
  angular
    .module("angularPracticeApp")
    .directive('questionsListItemTypes', function() {
      return {
        scope: {
          vm: '=vmAttr'
        },
        templateUrl: '../partials/createAssessment/questionsListItemTypes.html'
      }
    })
})();