function ajouterTache() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;
  
    const ul = document.getElementById("taskList");
    const li = document.createElement("li");
  
    li.innerHTML = `
      <span onclick="toggleTache(this)">${taskText}</span>
      <button onclick="supprimerTache(this)">❌</button>
    `;
  
    ul.appendChild(li);
    input.value = "";
  }
  
  function supprimerTache(btn) {
    btn.parentElement.remove();
  }
  
  function toggleTache(span) {
    span.parentElement.classList.toggle("completed");
  }
  