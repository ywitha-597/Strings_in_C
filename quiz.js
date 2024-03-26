var quizData = [
    {
        question: "Which function is used to find the length of a string in C?",
        answers: {
            a: "strlen",
            b: "strlength",
            c: "len",
            d: "length"
        },
        correctAnswer: "a"
    },
    {
        question: "What does the strcpy() function do?",
        answers: {
            a: "Concatenates two strings",
            b: "Compares two strings",
            c: "Copies one string to another",
            d: "Finds the length of a string"
        },
        correctAnswer: "c"
    },
    {
        question: "Which function is used to concatenate two strings in C?",
        answers: {
            a: "strconcat",
            b: "concat",
            c: "strcat",
            d: "joinstr"
        },
        correctAnswer: "c"
    },
    {
        question: "What does the strcmp() function do?",
        answers: {
            a: "Finds the length of a string",
            b: "Compares two strings",
            c: "Copies one string to another",
            d: "Concatenates two strings"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the return type of the strlen() function?",
        answers: {
            a: "int",
            b: "string",
            c: "char",
            d: "void"
        },
        correctAnswer: "a"
    },
    {
        question: "Which function is used to compare two strings in C?",
        answers: {
            a: "strcomp",
            b: "strcmp",
            c: "compare",
            d: "strcompare"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the output of strlen(\"hello\")?",
        answers: {
            a: "5",
            b: "6",
            c: "4",
            d: "0"
        },
        correctAnswer: "a"
    },
    {
        question: "What does the strcat() function do?",
        answers: {
            a: "Copies one string to another",
            b: "Compares two strings",
            c: "Concatenates two strings",
            d: "Finds the length of a string"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the return type of the strcpy() function?",
        answers: {
            a: "int",
            b: "string",
            c: "char",
            d: "void"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the output of strcmp(\"apple\", \"banana\")?",
        answers: {
            a: "1",
            b: "0",
            c: "-1",
            d: "None of the above"
        },
        correctAnswer: "c"
    }
    // Add more questions as needed
];


var quizContainer = document.getElementById("quizContainer");
var resultContainer = document.getElementById("resultContainer");
var correctAnswersContainer = document.getElementById("correctAnswersContainer");

function createQuiz() {
    var output = '';
    quizData.forEach(function(questionObj, index) {
        output += '<div class="question">';
        output += '<p>' + (index + 1) + '. ' + questionObj.question + '</p>';
        for (var option in questionObj.answers) {
            output += '<label>';
            output += '<input type="radio" name="question' + index + '" value="' + option + '">';
            output += questionObj.answers[option];
            output += '</label>';
        }
        output += '</div>';
    });
    quizContainer.innerHTML = output;
}

function submitQuiz() {
    var score = 0;
    var userAnswers = [];
    quizData.forEach(function(questionObj, index) {
        var userAnswer = document.querySelector('input[name="question' + index + '"]:checked');
        if (userAnswer) {
            userAnswers.push(userAnswer.value);
            if (userAnswer.value === questionObj.correctAnswer) {
                score++;
            }
        }
    });

    // Display score
    var scoreText = 'Congratulations, '+ "your score is " + score + "/" + quizData.length;
    resultContainer.textContent = scoreText;
    resultContainer.style.fontSize = "24px"; // Adjust the font size as needed

    // Display correct answers
    var correctAnswersText = "";
    quizData.forEach(function(questionObj, index) {
        correctAnswersText += (index + 1) + '. Correct answer: ' + questionObj.answers[questionObj.correctAnswer] + '<br>';
    });
    correctAnswersContainer.innerHTML = correctAnswersText;
}

window.onload = function() {
    createQuiz();
};
