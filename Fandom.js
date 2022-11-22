var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Tanay",
    score: 3,
  },

  {
    name: "Akash",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "Who is Thor's father? ",
  answer: "Odin"
}, {
  question: "Who was the first avenger? ",
  answer: "Captain America"
},
{
  question: "What is the name of the new Hawkeye? ",
  answer: "Kate Bishop"
},
{
  question : "Name the AI of Tony Stark ",
  answer : "Jarvis"
},
{
  question : "Which infinity stone does the tesseract contain? ",
  answer : "Space Stone"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to Marvel Fandom");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();