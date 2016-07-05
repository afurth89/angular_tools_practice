//***************************************************************************
//ASSESSMENT - PARENT
//***************************************************************************
(function() {
  
  angular
    .module('angularPracticeApp')
    .controller('AssessmentParentController', AssessmentParentController)

    AssessmentParentController.$inject = ['QuestionBankService', '$scope']

    function AssessmentParentController(QuestionBankService, $scope) {
      let vm = this;

      vm.questions = QuestionBankService.getQuestions();
      vm.selected = null;

      $scope.$watch('vm.questions', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
        console.log($scope.modelAsJson)
    }, true);
    }
})()