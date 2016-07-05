//***************************************************************************
//CREATE ASSESSMENT - PARENT
//***************************************************************************
(function() {
  
  angular
    .module('angularPracticeApp')
    .controller('CreateAssessmentParentController', CreateAssessmentParentController)

    CreateAssessmentParentController.$inject = ['QuestionBankService', '$scope']

    function CreateAssessmentParentController(QuestionBankService, $scope) {
      let vm = this;

      vm.questions = QuestionBankService.getQuestions();
      vm.selected = null;

      $scope.$watch('vm.questions', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
        console.log($scope.modelAsJson)
    }, true);
    }
})();

//***************************************************************************
//TAKE ASSESSMENT - PARENT
//***************************************************************************
(function() {
  
  angular
    .module('angularPracticeApp')
    .controller('TakeAssessmentParentController', TakeAssessmentParentController)

    TakeAssessmentParentController.$inject = ['QuestionBankService', '$scope']

    function TakeAssessmentParentController(QuestionBankService, $scope) {
      let vm = this;

      vm.questions = QuestionBankService.getQuestions();
      vm.answers = QuestionBankService.populateAnswersArray();

      vm.selectAnswer = function(id, choice) {
        QuestionBankService.updateAnswersArray(id,choice);
      }
    }
})();