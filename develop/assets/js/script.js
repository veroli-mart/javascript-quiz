// quiz questions
var quizQuestions= [
    { 
        q: "What is the keyword used when declaring variables that makes them private to a function?",
        a: 3,
        choices:[
            "1. function", 
            "2. if", 
            "3. var"
        ]
    },
    { 
        q:"How do you create an element using JavaScript?",
        a: 3,
        choices:[
        "1. document.querySelector",
        "2. function()",
        "3. document.createElement",
        "4. var div = function()", 
        ]
    },

    {
        q: "Inside which HTML element do we put the JavaScript?",
        a: 1,
        choices:[
        "1. <script>",
        "2. <js>",
        "3.<javascript>",
        "4. <a href = '' ",
        ]
    },
    {
        q: "The size of the letter (upper or lowercase) have no difference in meaning in JavaScript.",
        a: 3,
        choices:[
        "1. true",
        "2. who knows?!",
        "3. false",
    ]
    },
    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: 4,
        choices: [
        "1. JavaScript", 
        "2. terminal / bash", 
        "3. for loops", 
        "4. console.log",
    ]
} 
];
var remainingTime = 0;
  var currentQuestion = 0;
  var timer;
  
  
// functions
  
  var startTimer = function () {
    // reset quiz variables
    currentQuestion = 0;
    displayQuestion(currentQuestion);
  
    remainingTime = 75;
    document.getElementById("timer").innerHTML = remainingTime;
  
    // show quiz page
    document.body.className = "quiz";
  
    // start timer
    timer = setInterval(function () {
      if (remainingTime > 0) {
        remainingTime--;
        document.getElementById("timer").innerHTML = remainingTime;
      } else {
        document.getElementById("timer").innerHTML = 0;
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  };
  
  
  var displayQuestion = function (questionIndex) {
    var question = quizQuestions[questionIndex];
    var quizSectionEl = document.getElementById("quiz-page");
  
    // display the next question
    var questionEl = quizSectionEl.querySelector(".question");
    questionEl.textContent = question.q;
    questionEl.setAttribute("data-question-index", questionIndex.toString());
  
    // clear previous answer choices
    var choicesEl = quizSectionEl.querySelector(".choices");
    choicesEl.innerHTML = "";
  
    // show answer choices
    for (var i = 0; i < question.choices.length; i++) {
      var answerBtn = document.createElement("button");
      answerBtn.textContent = question.choices[i];
      choicesEl.appendChild(answerBtn);
    }
  };
  
  
  var checkAnswer = function (event) {
    var clickedEl = event.target;
    if (clickedEl.tagName !== "BUTTON") {
      return;
    }
  
    var correctAnswerIndex = quizQuestions[currentQuestion].a;
    var correctAnswerStr = quizQuestions[currentQuestion].choices[correctAnswerIndex];
  
    var resultEl = document.querySelector(".last-result");
  
    if (clickedEl.innerHTML === correctAnswerStr) {
      resultEl.textContent = "Correct!"
    } else {
      remainingTime -= 10;
      document.getElementById("timer").innerHTML = remainingTime;
      resultEl.textContent = "Wrong!"
    }
  
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
      displayQuestion(currentQuestion);
    } else {
      endQuiz();
    }
  };
  
  var endQuiz = function () {
    clearInterval(timer);
    document.getElementById("score").innerHTML = remainingTime;
    document.body.className += " end";
    var quizSectionEl = document.getElementById("quiz-page");
    quizSectionEl.querySelector(".question").textContent = "Your Done!";
  };
  
  
  var loadPreviousScores = function () {
    //any scores? get from localStorage
    var highScores = localStorage.getItem("highScores");
    if (!highScores) {
      // no scores in localStorage? reset to an empty string
      highScores = [];
    } else {

      highScores = JSON.parse(highScores);
    }
    return highScores;
  };
  
  
  var saveScore = function () {
    var highScores = loadPreviousScores();
  
    // get the user's initials and package it into an object with their remaining time
    var initials = document.getElementById("initials").value;
    var score = {
      initials: initials,
      score: remainingTime
    };
  
    // push it onto the array of high scores
    highScores.push(score);
  
    // sort the scores, largest first
    highScores.sort(function (a, b) {
      return b.score - a.score;
    });
  
    // store in localStorage
    localStorage.setItem("highScores", JSON.stringify(highScores));
  
    // clear the initials input field
    document.getElementById("initials").value = "";
  
    // go to the high scores page
    showScores();
  };
  
  
  var showScores = function () {
    // if the timer is running, clear it
    if (timer !== null) {
      clearInterval(timer);
      remainingTime = 0;
      document.getElementById("timer").innerHTML = 0;
    }
  
  
    var highScoreListEl = document.querySelector(".high-scores");
   
    highScoreListEl.innerHTML = "";
  
    // get any existing high scores
    var highScores = loadPreviousScores();
  
    // create the high scores list
    for (var i = 0; i < highScores.length; i++) {
      var scoreLiEl = document.createElement("li");
      scoreLiEl.textContent = highScores[i].initials + " - " + highScores[i].score;
      highScoreListEl.appendChild(scoreLiEl);
    }
  
    // score page
    document.body.className = "scores";
  };
  
  
  var showMainScreen = function () {
    document.body.className = "start";
  };
  
  
  var clearScores = function () {
    
    localStorage.removeItem("highScores");
  

    var highScoreListEl = document.querySelector(".high-scores");
    
    highScoreListEl.innerHTML = "";
  };
  
  
  // event listeners
  document.getElementById("startBtn").addEventListener("click", startTimer);
  document.querySelector("#quiz-page .choices").addEventListener("click", checkAnswer);
  document.querySelector(".high-score-link a").addEventListener("click", showScores);
  document.getElementById("back-to-start").addEventListener("click", showMainScreen);
  document.getElementById("clear-scores").addEventListener("click", clearScores);
  document.getElementById("save-score").addEventListener("click", saveScore);