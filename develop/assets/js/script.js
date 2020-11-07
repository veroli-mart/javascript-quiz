var questionOne = [
    { title: "What is the keyword used when declaring variables that makes them private to a function?",
    choices: [
        'var', 
        'function', 
        'if'],
        answer: "var"}
    ];

var questionTwo = [ 
    { title:"How do you create a DIV element using JavaScript?",
    choices: [
        "document.querySelector('div')",
        "function('div)",
        "document.createElement('div')",
        "var div = function()", ],
        answer: "document.createElement('div')"}
    ]; 

var questionThree = [
    {title: "Inside which HTML element do we put the JavaScript?",
    choices: [
        "<javascript>",
         "<script>",
         "<js>",
         "<a href = '' "],
         answer: "<script"}
];

var questionFour = [
    {title: "The size of the letter (upper or lowercase) have no difference in meaning in JavaScript.",
    choices: [
        "true",
        "false"
    ]
    }
];

var timeLeft = 75;
var timer = setInterval(countDown, 1000);

function myStopFunction() {
    clearInterval(timer);
}
   function countDown(){
        console.log(timeLeft); 
    timeLeft--
    if(timeLeft === 0){
        myStopFunction();
        console.log("You ran out of time!")
    }
}


  