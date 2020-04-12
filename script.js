
var quizContainer = $("Quiz");
var resultsContainer = $("Results");
var submitButton = $("Submit");
var timer = document.getElementById("timer")
var qChoices = $("#Question");
var remainingTime = 75;
var questionIndex = 0;

function startTime() {
  $("#Quiz").on("click", function(){
    
  })
  var Interval = setInterval(function() {
    counter--;
    timeLeft.textContent = counter;
    if(secondsLeft === 0) {
      clearInterval(Interval);
    }
  
  }, 1000);
  }

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

$("#Highscores").on("click", function(){
  
  alert("heyooo");
  //$(this).html("High Scores = " + counter);
  //At this point "highscores" variable is just something that
  //will equate at some point to the score from game or something

});



$("#Quiz").on("click", function(){
  $(".jumbotron").css("display", "none");
  $("#Question").css("display","block");
  alert("let the games Begin!");
  alert ("counter is now: "); // can i grab onto this with $
  questionIndex += 1;
  
  for( var i=0; i <quizQuestions.length; i++) {
    $("#Question").text(quizQuestions[i].title);
  }
  for(var i=0; i <quizQuestions.length; i++) {
    $("#Question").text(quizQuestions[i].choices);
  }
});


$("#Submit").on("click",showResults)

