const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".results-container");

// Quiz state variables
const QUIZ_TiME_LIMIT = 30; // seconds
let currentTime = QUIZ_TiME_LIMIT;
let timer = null;
let numberOfQuestions = 5;
let quizCategory = "programming";
let currentQuestion = null;
const questionsIndexHistory = [];
let correctAnswerCount = 0;

// Display the quiz result and hide the quiz container
const showQuizResults = () => {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    const resultText = `you answered <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b> questions correctly. Great effort!`;
    document.querySelector(".result-message").innerHTML = resultText;
}

// clear and reset the timer
const resetTimer = () => {
    clearInterval(timer);
    currentTime = QUIZ_TiME_LIMIT;
    timerDisplay.textContent = `${currentTime}s`;
};

// Initialize and start the timer for the current question
const startTimer = () => {
    clearInterval(timer); // make sure old timer is cleared
    currentTime = QUIZ_TiME_LIMIT;
    timerDisplay.textContent = `${currentTime}s`;

    timer = setInterval(() => {
        currentTime--;
        if (currentTime <= 0) {
            currentTime = 0;
            timerDisplay.textContent = `${currentTime}s`;
            clearInterval(timer);

            // Highlight correct answer
            highlightCorrectAnswer();

            // Disable options
            answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

            // Timer background turns red
            quizContainer.querySelector(".quiz-timer").style.background = "#c31402";

            // Automatically go to next question after 1.5s
            setTimeout(() => {
                renderQuestion();
            }, 1500);
        } else {
            timerDisplay.textContent = `${currentTime}s`;
        }
    }, 1000);
}

// Fetch a random question from the selected category
const getRandomQuestion = () => {
    const category = questions.find(cat => cat.category.toLocaleLowerCase() === quizCategory.toLocaleLowerCase());
    if (!category) return null; // safeguard if category not found
    const categoryQuestions = category.questions;

    // show the results if all questions have been answered
    if (questionsIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) {
        showQuizResults();
        return null;
    }
    // filter out already asked questions
    const availableQuestions = categoryQuestions.filter((_, index) => !questionsIndexHistory.includes(index));
    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;
}

// Highlight the correct answer and add icon
const highlightCorrectAnswer = () => {
    const correctIndex = currentQuestion.options.indexOf(currentQuestion.answer);
    const correctOption = answerOptions.querySelectorAll(".answer-option")[correctIndex];
    if (correctOption) {
        correctOption.classList.add("correct");
        const iconHTML = `<span class="material-symbols-rounded">check_circle</span>`;
        correctOption.insertAdjacentHTML("beforeend", iconHTML);
    }
}

// Handle the user's answer selection
const handleAnswer = (option, answerIndex) => {
    clearInterval(timer);
    const isCorrect = currentQuestion.options[answerIndex] === currentQuestion.answer;
    option.classList.add(isCorrect ? "correct" : "incorrect");
    if (!isCorrect) {
        highlightCorrectAnswer();
    } else {
        correctAnswerCount++;
    }
    // Insert icon based on correctness
    const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? 'check_circle' : 'cancel'}</span>`;
    option.insertAdjacentHTML("beforeend", iconHTML);

    // Disable further interaction with options
    answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
    nextQuestionBtn.style.visibility = "visible"; // Show the next question button
}

// render all current question options
const renderQuestion = () => {
    currentQuestion = getRandomQuestion();
    if (!currentQuestion) return;

    resetTimer();
    startTimer();

    // update the UI with the current question
    answerOptions.innerHTML = ""; // Clear previous options
    nextQuestionBtn.style.visibility = "hidden";
    quizContainer.querySelector(".quiz-timer").style.background = "#32313c";
    document.querySelector(".question-text").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> of <b>${numberOfQuestions}</b> questions`;

    // create option <li> elements for each answer option
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li, index));
    });
}

// start the quiz and return to the configuration container
const startQuiz = () => {
    configContainer.style.display = "none";
    quizContainer.style.display = "block";
    // update the quiz category and number of questions
    quizCategory = configContainer.querySelector(".category-option.active").textContent;
    numberOfQuestions = parseInt(configContainer.querySelector(".questions-option.active").textContent);
    resetQuiz();
    renderQuestion();
    startTimer();
}

// Highlight the selected option on click - category or no. of question
document.querySelectorAll(".category-option").forEach(option => {
    option.addEventListener("click", () => {
        document.querySelectorAll(".category-option.active").forEach(el => el.classList.remove("active"));
        option.classList.add("active");
        quizCategory = option.dataset.category || option.textContent;
    });
});
document.querySelectorAll(".questions-option").forEach(option => {
    option.addEventListener("click", () => {
        document.querySelectorAll(".questions-option.active").forEach(el => el.classList.remove("active"));
        option.classList.add("active");
        numberOfQuestions = parseInt(option.textContent);
    });
});

// reset the quiz and return to the configuration container
const resetQuiz = () => {
    resetTimer();
    correctAnswerCount = 0;
    questionsIndexHistory.length = 0;
    quizContainer.style.display = "block";
    resultContainer.style.display = "none";
}

nextQuestionBtn.addEventListener("click", renderQuestion);
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
document.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);