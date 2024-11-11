// Quiz Data (10 MCQs)
const quizData = [
    { question: "What is JavaScript?", options: ["A programming language", "A type of coffee", "A movie", "A car brand"], answer: "A programming language" },
    { question: "Which symbol is used for comments in JavaScript?", options: ["//", "/*", "<!--", "$$"], answer: "//" },
    { question: "Which of the following is a JavaScript framework?", options: ["React", "Django", "Flask", "Laravel"], answer: "React" },
    { question: "How do you declare a variable in JavaScript?", options: ["var", "def", "new", "function"], answer: "var" },
    { question: "Which company developed JavaScript?", options: ["Netscape", "Apple", "Google", "Microsoft"], answer: "Netscape" },
    { question: "What keyword is used to create a constant?", options: ["const", "var", "constant", "define"], answer: "const" },
    { question: "Which symbol is used for strict equality?", options: ["===", "==", "!=", "="], answer: "===" },
    { question: "What does JSON stand for?", options: ["JavaScript Object Notation", "Java Syntax Object Notation", "Java Source Oriented Notation", "None"], answer: "JavaScript Object Notation" },
    { question: "How do you call a function in JavaScript?", options: ["functionName()", "function call", "call functionName", "functionName"], answer: "functionName()" },
    { question: "What is an array?", options: ["A list of items", "A single value", "An object", "A function"], answer: "A list of items" }
];

let currentQuestion = 0;

// Load question
function loadQuestion() {
    const questionEl = document.getElementById("question-text");
    const optionsEl = document.getElementById("options");
    const nextButton = document.getElementById("next-button");
    
    questionEl.textContent = quizData[currentQuestion].question;
    optionsEl.innerHTML = ""; // Clear previous options

    quizData[currentQuestion].options.forEach(option => {
        const optionEl = document.createElement("div");
        optionEl.classList.add("option");
        optionEl.textContent = option;
        
        optionEl.onclick = () => {
            document.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
            optionEl.classList.add("selected");
            nextButton.style.visibility = "visible"; // Show Next button after selection
        };
        
        optionsEl.appendChild(optionEl);
    });

    nextButton.style.visibility = "hidden"; // Hide Next button initially
}

// Load next question
function nextQuestion() {
    const selectedOption = document.querySelector(".option.selected");
    if (!selectedOption) return;
    
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        alert("Quiz Completed!");
    }
}

// Initialize quiz
window.onload = loadQuestion;
