

const questionText = document.getElementById("question-title");
var currentQuestion = 0;
var userScore = 0;
var numQuestions = 5;
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
 const totalScore = questions.length;
 var element = document.getElementById("start");
 element.addEventListener("click", beginQuiz);
 //choices.addEventListener("click",submit);
 function beginQuiz() {
  //to hide start Quiz screen
    var startScreen = document.getElementById("start-screen");
    startScreen.style.display = "none";
    
   
    currentQuestion = 0;
    loadQuestion(currentQuestion);
 }
  function loadQuestion(currentQuestion)
  { 
    
    console.log("Loading..");
    
    questionText.innerHTML = '';
    // totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    console.log(questionText.innerHTML);
    var correctAnswer = questions[currentQuestion].answer;
//     <button id="myBtn" value="myvalue" onclick="myFunction()">Try it</button>
//     const btn = document.createElement("BUTTON");
//  btn.innerHTML = "I am a button";
//  document.body.appendChild(btn);

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
  

// var buttons = document.getElementById("choices"); //returns a nodelist
// for (var i= 0; i < buttons.length; i++)
// {
//     (function(index){
//         buttons[index].addEventListener("click",function(index)
//     })
// }
// choices.addEventListener("click", function(this.value)

// {
//     alert("clicked");
//     console.log(value)
// });
// }

// var buttons = document.getElementById('choices');
// console.log(buttons);
//  for (var i=0 ; i < buttons.length ; i++)
//  {    
//     console.log("hi");         
//     buttons[i].addEventListener("click", function()
//     {
//         alert("I am button ");
//     });
            
//  }


 }
        
        
// document.getElementById("choices").onclick = function(this)
// {
//     console.log(this);
//     alert('clicked');
// };
    
// for (let i = 0; i < buttons.length; i++) {
//     console.log("loop through buttons");
//   buttons[i].addEventListener("click", buttonsControl(i)); 

// }

// function buttonsControl(i) {
//   console.log("click logged")
//   console.log(i);
//   console.log(buttons.id);
// }


    //choices.addEventListener("click", checkAnswer(id, correctAnswer));
  

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
        console.log("Score: " + userScore);
      } else {
        userScore = userScore;  
        console.log("Score:" + userScore);                      
      }
      
      if (currentQuestion < 4) {
    
        currentQuestion += 1;
        var choices = document.getElementById("choices")
       
        while (choices.hasChildNodes()) {
            choices.removeChild(choices.firstChild);
          }
    
        loadQuestion( currentQuestion);
      } else {
        var choices = document.getElementById("choices")
       
        while (choices.hasChildNodes()) {
            choices.removeChild(choices.firstChild);
        questionText.innerHTML = 'Done.Your score is:' + userScore + ' / ' + totalScore;
        
      }
 }
}