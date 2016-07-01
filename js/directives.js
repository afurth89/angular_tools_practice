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

})()


//***************************************************************************
//ASSESSMENT - QUESTION LIST
//***************************************************************************
(function() {
  angular
    .module("angularPracticeApp")
    .directive('questionsList', function() {
      return {
        scope: {
          vm: '=vmAttr'
        },
        templateUrl: '../partials/shopping/questionsList.html'
      }
    })
})()