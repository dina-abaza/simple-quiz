
   
const quizData = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
        correctAnswer: "Shakespeare"
    }
];

let currentQuestionIndex=0;
let score=0;

function startquiz(){
    let currentQuestion=quizData[currentQuestionIndex];
    document.getElementById("question").textContent=currentQuestion.question;
    const answerButtons = document.querySelectorAll(".btn");

    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.onclick = () => selectAnswer(button, currentQuestion);
        
    });
}

function selectAnswer(button, currentQuestion) {
    const selectedAnswer = button.textContent;
  
    if (selectedAnswer === currentQuestion.correctAnswer) {
        button.style.backgroundColor = "green";
        score++;
    } else {
        button.style.backgroundColor = "red"; 
    }
    
    
    document.getElementById("next-btn").style.display = 'block'; 
}
startquiz();
document.getElementById("next-btn").onclick = () => {
    currentQuestionIndex++;
    const answerButtons = document.querySelectorAll(".btn");
    answerButtons.forEach(button => {
        button.style.backgroundColor = ''});
        if (currentQuestionIndex < quizData.length) {
            startquiz();
        } else {
            alert("Quiz Finished! Your score: " + score + " out of " + quizData.length);
        }
    };

window.onload = startquiz();
