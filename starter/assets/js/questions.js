const questionText = document.getElementById("question-title");
var currentQuestion = 0;
var userScore = 0;
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
 var numQuestions = questions.length;
 var quesCount = 1;
 const totalScore = questions.length;
 var timeleft = 100; 
 var downloadTimer;

function startTimer(timeleft, quesCount) {
  downloadTimer = setInterval(function() 
  {
    timeleft = timeleft;
    quesCount = quesCount;
  
    console.log("Time Left2:" + timeleft);
    console.log("Ques Count2:" + quesCount);
  
    document.getElementById("time").innerHTML = timeleft;
    timeleft --;
    console.log("Timer" + downloadTimer);
    if(timeleft <= 0 || quesCount == questions.length){
       clearInterval(downloadTimer);
       document.getElementById("time").innerHTML = "Finished";
       endQuiz();}
     else
     {
       document.getElementById("time").innerHTML = timeleft; 
     }
   }, 1000,timeleft, quesCount);
};

//  function timer(timeleft, quesCount, resetTime) {
       
//      }
 var element = document.getElementById("start");
 element.addEventListener("click", beginQuiz);
 //choices.addEventListener("click",submit);
 function beginQuiz() {
  //to hide start Quiz screen
    var startScreen = document.getElementById("start-screen");
    startScreen.style.display = "none";
    currentQuestion = 0;
    startTimer(timeleft, quesCount);
  
    loadQuestion(currentQuestion);
 }
  function loadQuestion(currentQuestion)
  { 
     questionText.innerHTML = '';
    // totalScore.innerHTML = questions.length;
    //Displays current question
   questionText.innerHTML = questions[currentQuestion].question;
   console.log(questionText.innerHTML);
    var correctAnswer = questions[currentQuestion].answer;
// Create buttons for answer choices
    var choices = document.getElementById("choices");
    
    const Option1 = document.createElement("Button");
    choices.appendChild(Option1)
    Option1.innerHTML = questions[currentQuestion].answers[0].option;
    Option1.dataset.answer=1;
    Option1.addEventListener("click", (Option1) => { clickedBtn = event.target
     checkAnswer(clickedBtn.dataset.answer, correctAnswer);
     });
      
    const Option2 = document.createElement("Button");
    choices.appendChild(Option2)
    Option2.innerHTML = questions[currentQuestion].answers[1].option;
    Option2.dataset.answer=2;
    Option2.addEventListener("click", (Option2) => { clickedBtn = event.target
     checkAnswer(clickedBtn.dataset.answer, correctAnswer);
     });

   
    const Option3 = document.createElement("Button");
    choices.appendChild(Option3)
    Option3.innerHTML = questions[currentQuestion].answers[2].option;
    Option3.dataset.answer=3;
    Option3.addEventListener("click", (Option2) => { clickedBtn = event.target
     checkAnswer(clickedBtn.dataset.answer, correctAnswer);
     });

    const Option4 = document.createElement("Button")
    choices.appendChild(Option4)
    Option4.innerHTML = questions[currentQuestion].answers[3].option;
    Option4.dataset.answer=4;
    Option4.addEventListener("click", (Option2) => { clickedBtn = event.target
     checkAnswer(clickedBtn.dataset.answer, correctAnswer);
     });
  
      
  }

    function nextQuestion(currentQuestion){
        
      if (currentQuestion < numQuestions) {
        console.log(currentQuestion);
        console.log(numQuestions);
        var choices = document.getElementById("choices")
       
        while (choices.hasChildNodes()) {
            choices.removeChild(choices.firstChild);
          }
    
        loadQuestion(currentQuestion);
        
      } 
      else {
            
        console.log("Ending");
        clearInterval(downloadTimer);
        endQuiz();
        
        
      }
 }


function endQuiz ()
{
  questionText.innerHTML = "End Of Quiz" + '<br>';
  questionText.innerHTML += "Your score is:" + userScore + ' / ' + totalScore;
  var choices = document.getElementById("choices")
       
        while (choices.hasChildNodes()) {
            choices.removeChild(choices.firstChild);
}
}



 function checkAnswer(givenAnswer, correctAnswer) {
    // This is the function that will run, when clicked on one of the answers
    // Check if givenAnswer is sams as the correct one
    // After this, check if it's the last question:
    // If it is: empty the answerArea and let them know it's done.
    //alert("Clicked");
        console.log("Given answer:" + givenAnswer);
        console.log("Actual answer:" + correctAnswer);
      if (givenAnswer == correctAnswer) {
        userScore ++; 
        quesCount ++;  
        currentQuestion += 1;   
        nextQuestion(currentQuestion);
      } 
      else {
        userScore = userScore;  
        currentQuestion += 1;
        quesCount ++;  
        timeleft = document.getElementById("time").innerHTML;
        timeleft = timeleft-9;
       // resetTime = true;
        clearInterval(downloadTimer);
        startTimer(timeleft,quesCount);
        nextQuestion(currentQuestion);
                     
      }
     }