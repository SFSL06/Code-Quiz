// To load questions
const questionText = document.getElementById("question-title");
var currentQuestion = 0;
var userScore = 0;
var userInitials;
var scoreList = [];

// Array of questions to be used in the quiz
let questions = [
    {
        question: "Commonly used data types DO NOT Include _________",
        answer: 3,
        answers: [
            {option: "1. Strings"},
            {option: "2. Boolean"},
            {option: "3. Alerts"},
            {option: "4. Numbers"},
        ]
        
    },
    {
        question: "The condition in an if/else statement is enclosed with ____________",
        answer: 3,
        answers: [
            {option: "1. Quotes"},
            {option: "2. Curly Brackets"},
            {option: "3. Parenthesis"},
            {option: "4. Square Brackets"},
        ]
    },
    {
 
        question: "Arrays in javascripts can be used to store ___________.",
        answer: 4,
        answers: [
            {option: "1. Numbers and Strings"},
            {option: "2. Other Arrays"},
            {option: "3. Boolean"},
            {option: "4. All of the above"},
        ]
    },
    {
 
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answer: 3,
        answers: [
            {option: "1. Commas"},
            {option: "2. Curly Brackets"},
            {option: "3. Quotes"},
            {option: "4. Parenthesis"},
        ]
        
    },
    {
 
        question: "A very useful tool used during development and debugging for printing content to the debugger ___________.",
        answer: 4,
        answers: [
            {option: "1. JavaScript"},
            {option: "2. Terminal/Bash"},
            {option: "3. For Loops"},
            {option: "4. Console log"},
        ]
    }
 ]

 // Stores number of questions
 var numQuestions = questions.length;

 // Keeps track of which question is being displayed and answered
 var quesCount = 1;

 // Total Score, each question is for 1 mark
 const totalScore = questions.length;

 // The time allowed for the test is 100 seconds
 var timeleft = 100; 

 // This will give feedback for each questions
 var feedbackTxt = document.getElementById("feedback");

 // This will be used to start and reset the timer
 var downloadTimer;

// Timer function
function startTimer(timeleft, quesCount) 
{
  downloadTimer = setInterval(function() 
  {
    timeleft = timeleft;
    // Displays time remaining
    document.getElementById("time").innerHTML = timeleft;
    timeleft --;
    
    if(timeleft <= 0)
      {
      // Stops timer when time runs out or when all questions have been answered
       clearInterval(downloadTimer);
       document.getElementById("time").innerHTML = "Finished";
       endQuiz();
      }
    else
     {
       document.getElementById("time").innerHTML = timeleft; 
     }
   }, 1000,timeleft);
};

// To load the quiz
 var element = document.getElementById("start");
 element.addEventListener("click", beginQuiz);
 
function beginQuiz() 
{
  //to hide start Quiz screen
    var startScreen = document.getElementById("start-screen");
    startScreen.style.display = "none";
    currentQuestion = 0;
   
    // To start timing the quiz
    startTimer(timeleft, quesCount);
  // To display question
  loadQuestion(currentQuestion);
 }
  
 
function loadQuestion(currentQuestion)
{ 
  
  feedbackTxt.innerHTML  = "";
  questionText.innerHTML = '';
  questionText.innerHTML = questions[currentQuestion].question;
  var correctAnswer = questions[currentQuestion].answer;

  // Create buttons to display and select Answer Options
  var choices = document.getElementById("choices");
    
  const Option1 = document.createElement("Button");
  choices.appendChild(Option1)
  Option1.innerHTML = questions[currentQuestion].answers[0].option;
  Option1.dataset.answer=1;
  Option1.addEventListener("click", (Option1) => { clickedBtn = event.target
  checkAnswer(clickedBtn.dataset.answer, correctAnswer);});
      
  const Option2 = document.createElement("Button");
  choices.appendChild(Option2)
  Option2.innerHTML = questions[currentQuestion].answers[1].option;
  Option2.dataset.answer=2;
  Option2.addEventListener("click", (Option2) => { clickedBtn = event.target
  checkAnswer(clickedBtn.dataset.answer, correctAnswer);});

   
  const Option3 = document.createElement("Button");
  choices.appendChild(Option3)
  Option3.innerHTML = questions[currentQuestion].answers[2].option;
  Option3.dataset.answer=3;
  Option3.addEventListener("click", (Option2) => { clickedBtn = event.target
  checkAnswer(clickedBtn.dataset.answer, correctAnswer);});

  const Option4 = document.createElement("Button")
  choices.appendChild(Option4)
  Option4.innerHTML = questions[currentQuestion].answers[3].option;
  Option4.dataset.answer=4;
  Option4.addEventListener("click", (Option2) => { clickedBtn = event.target
  checkAnswer(clickedBtn.dataset.answer, correctAnswer);});
  
}

function checkAnswer(givenAnswer, correctAnswer) 
{
// This is the function that will run, when one of the answers is clicked
// Check if givenAnswer is same as the correct answer
// After this, check if it's the last question
// If it is the last question clear the questions and options

  if (givenAnswer == correctAnswer) 
   {
    feedbackTxt.style.display = "block";
    feedbackTxt.innerHTML = "Correct";
    console.log(feedbackTxt)
    userScore ++; 
    currentQuestion += 1;   
    nextQuestion(currentQuestion);
    } 
    else {
    feedbackTxt.style.display = "block";
    feedbackTxt.innerHTML = "Wrong";
    console.log(feedbackTxt)
    userScore = userScore;  
    currentQuestion += 1;
    timeleft = document.getElementById("time").innerHTML;
    //time penalty
    timeleft = timeleft-9;
    clearInterval(downloadTimer);
    //reset time to 10 seconds less
    startTimer(timeleft);
    nextQuestion(currentQuestion);
    }
}   


function nextQuestion(currentQuestion)
{

if (currentQuestion < numQuestions) 
  {
  // Delete current question and options
  var choices = document.getElementById("choices")
       
  while (choices.hasChildNodes()) 
  {
      choices.removeChild(choices.firstChild);
  }
  // Display next question and options
  loadQuestion(currentQuestion);
  } 
else 
 {
  clearInterval(downloadTimer);
  endQuiz();
 }
}


function endQuiz ()
{
  questionText.innerHTML = '';
  
  var choices = document.getElementById("choices")
       
  while (choices.hasChildNodes()) {
  choices.removeChild(choices.firstChild);
  }
  feedbackTxt.style.display = "none";
  var endScreen = document.getElementById("end-screen");
  endScreen.style.display = "block";
  var finalScore = document.getElementById("final-score");
  finalScore.innerHTML = userScore + '/' + totalScore;
  finalScore.style.display = "block";
  var submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", function()
  {
   userInitials = document.getElementById("initials");
   var initials = userInitials.value.toUpperCase()
   scoreList.push({ initials: initials, score: userScore });
   console.log
   localStorage.setItem("scoreList", JSON.stringify(scoreList));
  });
  
}

 