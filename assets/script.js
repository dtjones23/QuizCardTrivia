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
    // displays question
    
    javascriptQuestions[0].options.forEach(function(option){
    
    const questionBtn = document.createElement('button');
    questionBtn.innerHTML = option;
    document.body.appendChild(questionBtn);
    quizSection.append(questionBtn);
    questionBtn.setAttribute('style', 'display:flex; align-items:center; margin-bottom:15px; font-size:20px;');
    // creates buttons for option key
    
    // make function that will happen for each one of our possible answers
    // loop over the options
    
    

    })
}






// questionBtn.addEventListener('click', checkanswer())
startBtn.addEventListener('click',startGame)