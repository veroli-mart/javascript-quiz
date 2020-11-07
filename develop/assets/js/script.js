var questions = [
    { 
        questionTitle: "What is the keyword used when declaring variables that makes them private to a function?",
        answer: "var",
        choices:[
            'var', 
            'function', 
            'if'
        ],
    },
    { 
        questionTitle:"How do you create a DIV element using JavaScript?",
        answer: "document.createElement('div')",
        choices:[
        "document.querySelector('div')",
        "function('div)",
        "document.createElement('div')",
        "var div = function()", 
        ],
    },

    {
        questionTitle: "Inside which HTML element do we put the JavaScript?",
        answer: "<script>",
        choices:[
        "<javascript>",
         "<script>",
         "<js>",
         "<a href = '' ",
        ],
    },
    {
        questionTitle: "The size of the letter (upper or lowercase) have no difference in meaning in JavaScript.",
        answer: "false",
        choices:[
        "true",
        "false"
    ],
    },
];
var startQuiz = function() {
    
}


// var timeLeft = 75;
// var timer = setInterval(countDown, 1000);

// function myStopFunction() {
//     clearInterval(timer);
// }
//    function countDown(){
//         console.log(timeLeft); 
//     timeLeft--
//     if(timeLeft === 0){
//         myStopFunction();
//         console.log("You ran out of time!")
//     }
// }

var quizTimer = getElementbyId("timer");
quizTimer.addEventListener("start", startQuiz);