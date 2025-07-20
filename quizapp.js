
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

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  let currentQuestion = quizData[currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;
  const answerButtons = document.querySelectorAll(".btn");

  answerButtons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
    button.style.borderColor = "black"; // إعادة ضبط الحدود
    button.disabled = false; // تفعيل الأزرار
    button.onclick = () => selectAnswer(button, currentQuestion);
  });

  document.getElementById("next-btn").style.display = 'none';
}

function selectAnswer(button, currentQuestion) {
  const selectedAnswer = button.textContent;
  const answerButtons = document.querySelectorAll(".btn");

  // تعطيل باقي الأزرار بعد الاختيار
  answerButtons.forEach(btn => btn.disabled = true);

  if (selectedAnswer === currentQuestion.correctAnswer) {
    button.style.borderColor = "lime";
    score++;
  } else {
    button.style.borderColor = "red";
    // تمييز الإجابة الصحيحة
    answerButtons.forEach(btn => {
      if (btn.textContent === currentQuestion.correctAnswer) {
        btn.style.borderColor = "lime";
      }
    });
  }

  document.getElementById("next-btn").style.display = 'block';
}

document.getElementById("next-btn").onclick = () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    startQuiz();
  } else {
    alert("Quiz Finished! Your score: " + score + " out of " + quizData.length);
    // إعادة التهيئة والبداية من جديد
    currentQuestionIndex = 0;
    score = 0;
    startQuiz();
  }
};

window.onload = startQuiz;
