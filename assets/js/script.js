/* Variable that stores all the questions, possible answers and correct one*/

const questions = [{
	question: "How much is 1 + 1?",
	answers: [{
		text: "22",
		correct: false
	}, {
		text: "11",
		correct: false
	}, {
		text: "4",
		correct: false
	}, {
		text: "2",
		correct: true
	}, ]
}, {
	question: "How much is 2 + 1?",
	answers: [{
		text: "22",
		correct: false
	}, {
		text: "3",
		correct: true
	}, {
		text: "4",
		correct: false
	}, {
		text: "2",
		correct: false
	}, ]
}, {
	question: "How much is 3 + 2?",
	answers: [{
		text: "5",
		correct: true
	}, {
		text: "11",
		correct: false
	}, {
		text: "4",
		correct: false
	}, {
		text: "2",
		correct: false
	}, ]
}, {
	question: "How much is 3 + 3?",
	answers: [{
		text: "6",
		correct: true
	}, {
		text: "11",
		correct: false
	}, {
		text: "4",
		correct: false
	}, {
		text: "2",
		correct: false
	}, ]
}, {
	question: "How much is 4 + 4?",
	answers: [{
		text: "22",
		correct: false
	}, {
		text: "11",
		correct: false
	}, {
		text: "4",
		correct: false
	}, {
		text: "8",
		correct: true
	}, ]
}, {
	question: "How much is 7 + 7?",
	answers: [{
		text: "22",
		correct: false
	}, {
		text: "11",
		correct: false
	}, {
		text: "14",
		correct: true
	}, {
		text: "2",
		correct: false
	}, ]
}, {
	question: "How much is 10 + 0?",
	answers: [{
		text: "22",
		correct: false
	}, {
		text: "11",
		correct: false
	}, {
		text: "10",
		correct: true
	}, {
		text: "2",
		correct: false
	}, ]
}, {
	question: "How much is 0 + 0?",
	answers: [{
		text: "22",
		correct: false
	}, {
		text: "11",
		correct: false
	}, {
		text: "4",
		correct: false
	}, {
		text: "0",
		correct: true
	}, ]
}, ];

/* Get the data from respective areas*/

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

/* Store score and question index */

let currentQuestionIndex = 0;
let score = 0;

/**
 * Starts the game and
 * resets values of question index and score
 * aditionally when an answer is selected 
 * changes the html of "Next"button
 * and calls showQuestion function
 */
function startQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = "Next";
	showQuestions();
}

/**
 * Stores the selected answer and checks if it is correct
 * also disables the rest of possible answers and
 * increases the score if correct
 */
function selectAnswer(e) {
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct === "true";
	if (isCorrect) {
		selectedBtn.classList.add("correct");
		score++;
	} else {
		selectedBtn.classList.add("incorrect");
	}

	Array.from(answerButtons.children).forEach(button => {
		if (button.dataset.correct === "true") {
			button.classList.add("correct");
		}
		button.disabled = true;
	});
	nextButton.style.display = "block";
}

/* Displays the current question and calls the reset function*/

function showQuestions() {
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNumber = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

	/* Displays the possible answers to the current question */

	currentQuestion.answers.forEach(answer => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButtons.appendChild(button);
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener("click", selectAnswer);
	});
}

/*Reset the possible answer for each question */

function resetState() {
	nextButton.style.display = "none";
	while (answerButtons.firstChild) {
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

/**
 * Increases the question index and if
 * there are still more questions then 
 * displays the next one (calls de function) or shows the score 
 * if there are no more questions
 */

function nextQuestion() {
	currentQuestionIndex++;
	if (currentQuestionIndex < questions.length) {
		showQuestions();
	} else {
		showScore();
	}
}

/**
 * Shows the score, reste it and changes the Next 
 * button to Replay
 */

function showScore() {
	resetState();
	questionElement.innerHTML = `You got ${score} of ${questions.length}`;
	nextButton.innerHTML = "Replay";
	nextButton.style.display = "block";
}

/** Next button displays the next question if 
 * there are still questions or resets the quiz if 
 * the question was the last of all
 */

nextButton.addEventListener("click", () => {
	if (currentQuestionIndex < questions.length) {
		nextQuestion();
	} else {
		startQuiz();
	}
});



startQuiz();