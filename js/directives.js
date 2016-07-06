//***************************************************************************
//CREATE Assessment - PARENT
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
//CREATE Assessment - QUESTION LIST SIMPLE
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
//TAKE Assessment - PARENT
//***************************************************************************
(function() {
  angular
    .module('angularPracticeApp')
    .directive('takeAssessmentParent', function() {
      return {
        controller: "TakeAssessmentParentController",
        controllerAs: 'vm',
        templateUrl: '../partials/takeAssessment/layout.html'
      }
    })
})();

//***************************************************************************
//TAKE Assessment - QUESTIONS LIST
//***************************************************************************
(function() {
  angular
    .module('angularPracticeApp')
    .directive('assessmentQuestionsList', function() {
      return {
        scope: {
          vm: '=vmAttr'
        },
        templateUrl: '../partials/takeAssessment/assessmentQuestionsList.html'
      }
    })
})();

//***************************************************************************
//VIEW Results - PARENT
//***************************************************************************
(function() {
  angular
    .module('angularPracticeApp')
    .directive('viewResultsParent', function() {
      return {
        controller: "ViewResultsParentController",
        controllerAs: 'vm',
        templateUrl: '../partials/viewResults/layout.html'
      }
    })
})();

//***************************************************************************
//VIEW Results - Chart
//***************************************************************************
(function() {
  angular
    .module('angularPracticeApp')
    .directive('viewResultsChart', function() {
      return {
        scope: {
          vm: '=vmAttr'
        },
        templateUrl: '../partials/viewResults/resultsChart.html'
      }
    })
})();

