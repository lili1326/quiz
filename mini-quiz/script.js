const questions = [
    {
      question: "Quelle est la capitale de la France ?",
      answers: ["Madrid", "Paris", "Berlin"],
      correct: 1
    },
    {
      question: "Combien y a-t-il de continents ?",
      answers: ["5", "6", "7"],
      correct: 2
    },
    {
      question: "Le HTML est un...",
      answers: ["Langage de programmation", "Langage de style", "Langage de balisage"],
      correct: 2
    }
  ];
  
  let currentQuestion = 0;
  const container = document.getElementById("question-container");
  const nextBtn = document.getElementById("next-btn");
  
  function showQuestion() {
    const q = questions[currentQuestion];
    container.innerHTML = `
      <h2>${q.question}</h2>
      ${q.answers.map((ans, i) => `
        <button onclick="checkAnswer(${i})">${ans}</button>
      `).join('')}
    `;
  }
  
  function checkAnswer(selected) {
    const correct = questions[currentQuestion].correct;
    if (selected === correct) {
      alert("✅ Bonne réponse !");
    } else {
      alert("❌ Mauvaise réponse !");
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      container.innerHTML = "<h2>🎉 Quiz terminé !</h2>";
      nextBtn.style.display = "none";
    }
  }
  
  nextBtn.addEventListener("click", showQuestion);
  
  // Lancement du quiz
  showQuestion();
  