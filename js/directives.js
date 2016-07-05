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
        templateUrl: '../partials/assessment/layout.html'
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
        templateUrl: '../partials/assessment/questionsListSimple.html'
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
        templateUrl: '../partials/assessment/questionsListItemTypes.html'
      }
    })
})();