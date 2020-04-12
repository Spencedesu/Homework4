
// var quizContainer = $("Quiz");
// var resultsContainer = $("Results");
// var submitButton = $("Submit");
// var qChoices = $("#Question");
// var remainingTime = 75;
// var questionIndex = 0;
var timer = document.getElementById("timer");



var quizQuestions = [
  {
    title: "What is not a Javascript component?",
    choices: ["objects", "functions", "anchor tags", "methods"],
    answer: "anchor tags"
  },
  {
  
    title: "What does the term API stand for?",
    choices: ["Advanced Protocol Index", "Application Programming Interface",
    "Artificial Police Illuminati","Alternate Programming Interlay"],
    answer: "Application Programming Interface"
  },
  {
    title: "The DOM affects ____",
    choices: ["User interface", "HTML that is displayed to the screen", "Changes made via Javascript", "All of the above"],
    answer: "All of the above"
  },
  {
    title: "The jQuery selector, $, does what to the selected element?",
    choices: ["Adds new HTML to the DOM", "Specifies the node at which to work", "Appends changes to DOM", "All of the above"],
    answer: "Specifies the node at which to work"
  },
  {
    title: "What could be contained within an array?",
    Choices: ["Objects","Another Array", "Objects + Arrays", "None of the above"],
    answer: "Objects + Arrays"
  }
  ];

  // function startQuiz() {
  //   $("#Quiz").on("click", function)
  // }

function start() {
  $("#Quiz").on("click", function(){
    setTime();
    $(".jumbotron").css("display", "none");
    $("#Question").css("display","block");
    // alert("let the games Begin!");
    // alert ("counter is now: "); // can i grab onto this with $
    // questionIndex += 1;
    var questions = document.getElementById("QuestionsContainer")
    .setAttribute("class", "questionstuff");
    
    function setTime() {
      var counter = 60;
      var Interval = setInterval(function() {
        counter--;
        timer.textContent = "Remaining: " + counter;

        if(counter === 0) {
          clearInterval(Interval);
        }
      }, 1000);

      Question1();

      function Question1() {
        var questionsElement = document.getElementById("questionsElement");
        questionsElement.textContent = quizQuestions[0]["title"];
        console.log(quizQuestions[0]);
        var answers = document.getElementById("answersElement");
        for (var i = 0; i < quizQuestions[0]["choices"].length; i++) {
            var list = document.createElement("li");
            list.textContent = questions[0]["choices"][i];
            list.setAttribute("class", "btn");
            answers.appendChild(list); 
        }
      }
    }
})} 
  

start();
