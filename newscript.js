const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)

function startGame() {
  console.log("started")
  startButton.classList.add("hide")
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  setNextQuestion()
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])
// this shuffledQuestions ^^ is never really defined
}

function showQuestion(question) {
  questionContainerElement.innerText = question.question
  //answerButtonsElement.innerText = question.answers
}

function selectAnswer() {

}

const questions = [
  {
    question: "What is not a Javascript component?",
    answers: [
      { text: "objects", correct: false},
      { text: "functions", correct: false},
      { text: "anchor tags", correct: true},
      { text: "methods", correct: false}
    ]
  }
]