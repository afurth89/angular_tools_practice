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
      vm.answersArray = QuestionBankService.populateAnswersArray();
      vm.performanceData = QuestionBankService.getUserPerformance();

      vm.selectAnswer = function(id, choice) {
        // Update the questions array
        QuestionBankService.updateQuestionsArray(id,choice);
          // Create an ng-class to highlight the choice that was selected
        QuestionBankService.updateAnswersArray(id,choice);
        vm.performanceData = QuestionBankService.getUserPerformance();
      }
    }
})();

//***************************************************************************
//VIEW RESULTS - PARENT
//***************************************************************************
(function() {
  
  angular
    .module('angularPracticeApp')
    .controller('ViewResultsParentController', ViewResultsParentController)

    ViewResultsParentController.$inject = ['QuestionBankService', '$scope']

    function ViewResultsParentController(QuestionBankService, $scope) {
      let vm = this;

      // Both 'options' and 'data' must be JSON objects
      vm.options = {
          chart: {
                type: 'pieChart',
                height: 1000,
                donut: true,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,

                pie: {
                    startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
                    endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
                },
                duration: 500,
                legend: {
                    margin: {
                        top: 100,
                        right: 175,
                        bottom: 5,
                        left: 0
                    }
                }
          }
      };
      vm.data = QuestionBankService.getTestData();

      vm.questions = QuestionBankService.getQuestions();
      vm.answersArray = QuestionBankService.populateAnswersArray();
      vm.performanceData = QuestionBankService.getUserPerformance();

      
    }
})();