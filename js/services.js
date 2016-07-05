app.service("QuestionBankService", function() {
  

  const questions = [
    {
      "id": 1,
      'qText': "What was the first state in the United States?",
      'qOptions': [
        {'text': 'Delaware'},
        {'text': 'Maryland'},
        {'text': 'New York'},
        {'text': 'Pennsylvania'}
      ],
      'qAnswer': 'a'
    }, {
      "id": 2,
      'qText': "Who was the first President of the United States?",
      'qOptions': [
        {'a': 'John Adams'},
        {'b': 'Alexander Hamilton'},
        {'c': 'Abraham Lincoln'},
        {'d': 'George Washington'}
      ],
      'qAnswer': 'd'
    }, {
      "id": 3,
      'qText': "When did the United States declare its independence?",
      'qOptions': [
        {'a': 1706},
        {'b': 1776},
        {'c': 1789},
        {'d': 1812}
      ],
      'qAnswer': 'b'
    }, {
      "id": 4,
      'qText': "What country did the United States declare its independence from?",
      'qOptions': [
        {'a': 'France'},
        {'b': 'Spain'},
        {'c': 'England'},
        {'d': 'Germany'}
      ],
      'qAnswer': 'c'
    }, {
      "id": 5,
      'qText': "How many colonies did the United States have?",
      'qOptions': [
        {'a': 7},
        {'b': 18},
        {'c': 0},
        {'d': 13}
      ],
      'qAnswer': 'd'
    }

  ]
  return {
    getQuestions: function() {
      return questions;
    }
  }
})

// const questions = [
  //   {
  //     "id": 1,
  //     "label": "q1",
  //     allowedTypes: ['q1'],
  //     max: 4,
  //     'qText': "What was the first state in the United States?",
  //     'qOptions': [
  //       {'text': 'Delaware', type: 'q1'},
  //       {'text': 'Maryland', type: 'q1'},
  //       {'text': 'New York', type: 'q1'},
  //       {'text': 'Pennsylvania', type: 'q1'}
  //     ],
  //     'qAnswer': 'a'
  //   }, {
  //     "id": 2,
  //     "label": "q2",
  //     allowedTypes: ['q2'],
  //     max: 4,
  //     'qText': "Who was the first President of the United States?",
  //     'qOptions': [
  //       {'a': 'John Adams', type: 'q2'},
  //       {'b': 'Alexander Hamilton', type: 'q2'},
  //       {'c': 'Abraham Lincoln', type: 'q2'},
  //       {'d': 'George Washington', type: 'q2'}
  //     ],
  //     'qAnswer': 'd'
  //   }, {
  //     "id": 3,
  //     "label": "q3",
  //     allowedTypes: ['q3'],
  //     max: 4,
  //     'qText': "When did the United States declare its independence?",
  //     'qOptions': [
  //       {'a': 1706, type: 'q3'},
  //       {'b': 1776, type: 'q3'},
  //       {'c': 1789, type: 'q3'},
  //       {'d': 1812, type: 'q3'}
  //     ],
  //     'qAnswer': 'b'
  //   }, {
  //     "id": 4,
  //     "label": "q4",
  //     allowedTypes: ['q4'],
  //     max: 4,
  //     'qText': "What country did the United States declare its independence from?",
  //     'qOptions': [
  //       {'a': 'France', type: 'q4'},
  //       {'b': 'Spain', type: 'q4'},
  //       {'c': 'England', type: 'q4'},
  //       {'d': 'Germany', type: 'q4'}
  //     ],
  //     'qAnswer': 'c'
  //   }, {
  //     "id": 5,
  //     "label": "q5",
  //     allowedTypes: ['q5'],
  //     max: 4,
  //     'qText': "How many colonies did the United States have?",
  //     'qOptions': [
  //       {'a': 7, type: 'q5'},
  //       {'b': 18, type: 'q5'},
  //       {'c': 0, type: 'q5'},
  //       {'d': 13, type: 'q5'}
  //     ],
  //     'qAnswer': 'd'
  //   }

  // ]