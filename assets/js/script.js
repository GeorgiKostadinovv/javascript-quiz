console.log("conected")
const questions = [
    {
        question: "How much is 1 + 1?",
        answers: [
            {text:"22", correct: false},
            {text:"11", correct: false},
            {text:"4", correct: false},
            {text:"2", correct: true},
        ]
    },
    {
        question: "How much is 2 + 1?",
        answers: [
            {text:"22", correct: false},
            {text:"3", correct: true},
            {text:"4", correct: false},
            {text:"2", correct: false},
        ]
    },
    {
        question: "How much is 3 + 2?",
        answers: [
            {text:"5", correct: true},
            {text:"11", correct: false},
            {text:"4", correct: false},
            {text:"2", correct: false},
        ]
    },
    {
        question: "How much is 3 + 3?",
        answers: [
            {text:"6", correct: true},
            {text:"11", correct: false},
            {text:"4", correct: false},
            {text:"2", correct: false},
        ]
    },
    {
        question: "How much is 4 + 4?",
        answers: [
            {text:"22", correct: false},
            {text:"11", correct: false},
            {text:"4", correct: false},
            {text:"8", correct: true},
        ]
    },
    {
        question: "How much is 7 + 7?",
        answers: [
            {text:"22", correct: false},
            {text:"11", correct: false},
            {text:"14", correct: true},
            {text:"2", correct: false},
        ]
    },
    {
        question: "How much is 10 + 0?",
        answers: [
            {text:"22", correct: false},
            {text:"11", correct: false},
            {text:"10", correct: true},
            {text:"2", correct: false},
        ]
    },
    {
        question: "How much is 0 + 0?",
        answers: [
            {text:"22", correct: false},
            {text:"11", correct: false},
            {text:"4", correct: false},
            {text:"0", correct: true},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
};

function showQuestions() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    })
};


function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){ 
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz ()
