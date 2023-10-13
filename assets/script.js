var startBtn = document.getElementById("start-button")
var initialsForm = document.getElementById("initials-form")
var quizSection = document.getElementById("quiz-section")
var timerEl = document.querySelector('.timer')
var timeLeft = 60
var score = 0;
var QI = 0;

function setTime() {
    // sets the time for quiz
    timeLeft = 60
    var timeInterval = setInterval(function(){
        timeLeft--;
        if(timeLeft >= 1){
            timerEl.textContent = timeLeft + " seconds";
            // display timer decending
        } else {
            clearInterval(timeInterval);
            endgame()
        }
    },1000);

}
function startGame() {
    setTime()
    // hide start screen
    document.getElementById('start-section').classList.add('hide')
    // show quiz screen
    quizSection.classList.remove('hide')
    buildQuestion()
}
function buildQuestion() {
    document.getElementById('question-el').textContent = javascriptQuestions[QI].question;
    // displays question
    var questionsContainer = document.querySelector(".questions-container")
    questionsContainer.innerHTML = "";
    javascriptQuestions[QI].options.forEach(function (option) {

        const questionBtn = document.createElement('button');
        questionBtn.textContent = option;
        questionBtn.setAttribute("value", option)
        questionBtn.onclick = function () {
            if (this.value === javascriptQuestions[QI].answer) {
                score++;
            } else {
                timeLeft -= 10;
            };
            QI++;
            if (QI === javascriptQuestions.length) {
                endgame()
            } else {
                buildQuestion();
            };
        }
        questionsContainer.append(questionBtn);
        questionBtn.setAttribute('style', 'display:flex; align-items:center; margin-bottom:15px; font-size:20px;');
    })
}
function endgame() {
    // clear the questions div and show the endgame screen
    quizSection.classList.add('hide')
    document.getElementById('end-game').classList.remove('hide')
    
    
}
// function submitScore() {
//     console.log(score);
// }




// questionBtn.addEventListener('click', checkanswer())
startBtn.addEventListener('click', startGame)
initialsForm.addEventListener('submit', function(event){
    event.preventDefault()
    console.log(score);
    // get initals from input
    // create an object that contains initials and score
    // create global array for highscores
    // push object to highscore array
    // add highscore array to local storage
    // dont forget to use JSON/stringify around the array
    // numberCorrect * timeLeft
})

// if() to make timer stop
// set interval