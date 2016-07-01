app.service("QuestionBankService", function() {
  const questions = [
    {
      "id": 1,
      'qText': "What was the first state in the United States?",
      'qOptions': {
        'a': 'Delaware',
        'b': 'Maryland',
        'c': 'New York',
        'd': 'Pennsylvania'
      },
      'qAnswer': 'a'
    }, {
      "id": 2,
      'qText': "Who was the first President of the United States?",
      'qOptions': {
        'a': 'John Adams',
        'b': 'Alexander Hamilton',
        'c': 'Abraham Lincoln',
        'd': 'George Washington'
      },
      'qAnswer': 'd'
    }, {
      "id": 3,
      'qText': "When did the United States declare its independence?",
      'qOptions': {
        'a': 1706,
        'b': 1776,
        'c': 1789,
        'd': 1812
      },
      'qAnswer': 'b'
    }, {
      "id": 4,
      'qText': "What country did the United States declare its independence from?",
      'qOptions': {
        'a': 'France',
        'b': 'Spain',
        'c': 'England',
        'd': 'Germany'
      },
      'qAnswer': 'c'
    }, {
      "id": 5,
      'qText': "How many colonies did the United States have?",
      'qOptions': {
        'a': 7,
        'b': 18,
        'c': 0,
        'd': 13
      },
      'qAnswer': 'd'
    }

  ]

  return {
    getQuestions: function() {
      return questions;
    }
  }
})