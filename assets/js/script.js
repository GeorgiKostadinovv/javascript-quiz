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



runGame ()

displayQuestion()

checkAnswer()

incrementScore ()

decreaseLifes ()
