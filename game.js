const question = document.querySelector('#question') 
const options = Array.from(document.querySelectorAll('.option-text'))

let currentQuestion = {}
let aceptingAnswers = true
let questionCounter = 0
let availableQuestions = []
let score = 0

let questions = [
    {
        question: "What is the result of the following math operation: 2 * 2 + 2?",
        option1: "1",
        option2: "2",
        option3: "0",
        option4: "6",
        answer: 6
    },
    {
        question: "What is the result of the following math operation: 12 * 12?",
        option1: "124",
        option2: "1124",
        option3: "144",
        option4: "1144",
        answer: 144
    },
    {
        question: "What is the result of the following math operation: 11/11?",
        option1: "1",
        option2: "0",
        option3: "7",
        option4: "12",
        answer: 1
    },
    {
        question: "What is the result of the following math operation: 4 + 4?",
        option1: "7",
        option2: "4",
        option3: "10",
        option4: "8",
        answer: 8
    },
    {
        question: "What is the result of the following math operation: 155666 - 155666?",
        option1: "110",
        option2: "0",
        option3: "1999",
        option4: "6133",
        answer: 0
    },
]

const MAX_QUESTIONS = 0

startGame = () => {
    questionCounter = 0
    availableQuestions = [...questions]
    nextQuestion ()
} 

