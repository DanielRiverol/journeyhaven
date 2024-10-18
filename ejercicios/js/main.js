// Objeto para almacenar los resultados de la encuesta
const results = {
  JavaScript: 0,
  Python: 0,
  Java: 0,
  "C#": 0,
  Ruby: 0,
};

// Función para actualizar los resultados en el DOM
function updateResults() {
  const resultsList = document.getElementById("results");
  resultsList.innerHTML = `
        <li>JavaScript: ${results.JavaScript}</li>
        <li>Python: ${results.Python}</li>
        <li>Java: ${results.Java}</li>
        <li>C#: ${results["C#"]}</li>
        <li>Ruby: ${results.Ruby}</li>
    `;
}

// Función para manejar el envío del formulario
function submitQuiz() {
  const selectedOption = document.querySelector(
    'input[name="language"]:checked'
  );

  if (selectedOption) {
    const selectedValue = selectedOption.value;
    results[selectedValue]++; // Incrementa el valor correspondiente en el objeto
    updateResults(); // Actualiza los resultados en el DOM
  } else {
    alert("Por favor, selecciona una opción.");
  }
}

// Agregar el evento al botón de enviar
document.getElementById("submit-btn").addEventListener("click", submitQuiz);
