// Array de objetos que contienen los libros con título y descripción
const books = [
  {
    title: "Cien años de soledad",
    description:
      "Una novela de Gabriel García Márquez que cuenta la historia de la familia Buendía en el pueblo ficticio de Macondo.",
  },
  {
    title: "El señor de los anillos",
    description:
      "Una épica fantástica escrita por J.R.R. Tolkien sobre la lucha por el control del anillo único.",
  },
  {
    title: "1984",
    description:
      "Una novela distópica de George Orwell que narra una sociedad totalitaria bajo el control del Gran Hermano.",
  },
  {
    title: "El principito",
    description:
      "Una obra de Antoine de Saint-Exupéry sobre las aventuras de un joven príncipe que explora varios planetas.",
  },
];

// Función para generar la lista de libros en el DOM
function renderBooks() {
  const bookList = document.getElementById("book-list");

  books.forEach((book, index) => {
    // Crear el elemento del título del libro
    const li = document.createElement("li");
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;

    // Crear el botón para ver/ocultar detalles
    const detailsButton = document.createElement("button");
    detailsButton.textContent = "Ver detalles";
    detailsButton.dataset.index = index;

    // Crear el párrafo donde se mostrará la descripción (inicialmente oculto)
    const bookDescription = document.createElement("p");
    bookDescription.textContent = book.description;
    bookDescription.style.display = "none"; // Oculto por defecto

    // Agregar evento al botón para mostrar/ocultar la descripción
    detailsButton.addEventListener("click", () => {
      const isVisible = bookDescription.style.display === "block";
      bookDescription.style.display = isVisible ? "none" : "block"; // Alterna entre mostrar y ocultar
      detailsButton.textContent = isVisible
        ? "Ver detalles"
        : "Ocultar detalles"; // Cambia el texto del botón
    });

    // Añadir los elementos al `li`
    li.appendChild(bookTitle);
    li.appendChild(detailsButton);
    li.appendChild(bookDescription);

    // Añadir el `li` a la lista de libros
    bookList.appendChild(li);
  });
}

// Renderizar la lista de libros al cargar la página
renderBooks();
