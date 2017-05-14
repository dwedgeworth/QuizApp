var qArrayIndex = 0;

var qArray = [
  {
  	question: 'How many propellers are in Quadcopter?',
  	answer1: 'ONE',
    answer2: 'TWO',
    answer3: 'THREE',
    answer4: 'FOUR',
    correct: 'FOUR',
  },
    {
  	question: 'How many axis of movement does Quadcopter have?',
  	answer1: 'ONE',
    answer2: 'TWO',
    answer3: 'THREE',
    answer4: 'FOUR',
    correct: 'FOUR',
  },
    {
  	question: 'What word is the rotation of along a vertical axis?',
  	answer1: 'YAW',
    answer2: 'TILT',
    answer3: 'SPIN',
    answer4: 'ANGLE',
    correct: 'YAW',
  },
];

var correctCount = 0;

//how does .val no to place the value in the "value" seciont of the input?
var qFormTemplate =
  '<div>'+
    '<p class="questionString"></p><br>' +
      '<form id="qForm" class="js-qForm">' +
          '<input type="radio" name="answer-choice" id="ans-1" class="ans-1 value=""><label for="ans-1" id="js-label1"></label>' +
          '<input type="radio" name="answer-choice" id="ans-2" class="ans-2 value=""><label for="ans-2" id="js-label2"></label>' +
          '<input type="radio" name="answer-choice" id="ans-3" class="ans-3 value=""><label for="ans-3" id="js-label3"></label>' +
          '<input type="radio" name="answer-choice" id="ans-4" class="ans-4 value=""><label for="ans-4" id="js-label4"></label>' +
      '<input id="userChoice" type="submit" name="answer">' +
     '</form>'+
    '</div>';


var qNumberTemplate = '<li class="questionNumber"></li>';

var qCorrectTemplate = '<li class="correctQuestions"></li>';

var qQuizResultTemplate = '<h1>You answered' + ' ' + '<span class="finalPage"></span> correct out of 3</h1>';


function renderQuestion(qFormTemplate, qArrayIndex, qArray){
  var questionPush = $(qFormTemplate);
  //change question
  questionPush.find('.questionString').text(qArray[qArrayIndex].question);
  //change value
  questionPush.find('#ans-1').val(qArray[qArrayIndex].answer1);
  questionPush.find('#ans-2').val(qArray[qArrayIndex].answer2);
  questionPush.find('#ans-3').val(qArray[qArrayIndex].answer3);
  questionPush.find('#ans-4').val(qArray[qArrayIndex].answer4);
  //change label
  questionPush.find('#js-label1').text(qArray[qArrayIndex].answer1);
  questionPush.find('#js-label2').text(qArray[qArrayIndex].answer2);
  questionPush.find('#js-label3').text(qArray[qArrayIndex].answer3);
  questionPush.find('#js-label4').text(qArray[qArrayIndex].answer4);

  $('.js-qContainer').html(questionPush);
};

function renderNumberTemplate(qNumberTemplate, qArrayIndex){
  var numberTemplateVariable = $(qNumberTemplate);
  var questionNumber = qArrayIndex + 1;
  numberTemplateVariable.text('Number ' + questionNumber + ' of 3')
  //$('.js-resultsBox').html(numberTemplateVariable);
  $('.js-qtracker').html(numberTemplateVariable);
};

function renderqCorrectTemplate(qCorrectTemplate){
  var correctAnswers = $(qCorrectTemplate);
  correctAnswers.text(correctCount + ' correct out of 3');
  $('.js-qtracker').append(correctAnswers);
};


function renderQuizResultTemplate(qQuizResultTemplate){
  var renderFinal = $(qQuizResultTemplate);
  $('.js-resultsBox').html(' ');
  renderFinal.find('.finalPage').text(correctCount);
  $('.js-qContainer').html(renderFinal);
};

function registerFormHandler(){
  $('#qForm').submit(function(event){
    event.preventDefault();
    var userChoice = $("#qForm input[type='radio']:checked").val();

    if(userChoice === qArray[qArrayIndex].correct){

      correctCount = correctCount + 1;
      alert('Congratulations your answer is correct!')
    } else {
      alert('Your answer is Incorrect. The correct answer should be ' + qArray[qArrayIndex].correct)
    }

    qArrayIndex = qArrayIndex + 1;

    if(qArrayIndex < 3){
      render();
    } else {
      renderQuizResultTemplate(qQuizResultTemplate);
    }

  })


};

function render(){
  var userChoice = $("#qForm input[type='radio']:checked").val();
  renderQuestion(qFormTemplate, qArrayIndex, qArray);
  renderNumberTemplate(qNumberTemplate, qArrayIndex);
  renderqCorrectTemplate(qCorrectTemplate);
  registerFormHandler();
};

$(document).ready(function(){
  render();
});












