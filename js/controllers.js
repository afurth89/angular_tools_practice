//***************************************************************************
//ASSESSMENT - PARENT
//***************************************************************************
(function() {
  
  angular
    .module('angularPracticeApp')
    .controller('AssessmentParentController', AssessmentParentController)

    AssessmentParentController.$inject = ['QuestionBankService']

    function AssessmentParentController(QuestionBankService) {
      let vm = this;

      vm.questions = QuestionBankService.getQuestions();
    }
})()