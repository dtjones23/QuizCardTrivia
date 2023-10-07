var startBtn = document.getElementById("start-button")
var quizSection = document.getElementById("quiz-section")
function startGame() {
    // hide start screen
    document.getElementById('start-section').classList.add('hide')
    // show quiz screen
    quizSection.classList.remove('hide')
    buildQuestion()
}
function buildQuestion() {
    document.getElementById('question-el').textContent = javascriptQuestions[0].question;
    javascriptQuestions[0].options.forEach(function(option){
    
    })
}







startBtn.addEventListener('click',startGame)