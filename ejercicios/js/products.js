// Array de objetos que contiene los productos
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Teclado", price: 45 },
  { name: "Monitor", price: 250 },
  { name: "Impresora", price: 150 },
];

// Función para mostrar los productos filtrados en el DOM
function renderProducts(filteredProducts) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Limpiar la lista antes de mostrar los resultados filtrados

  filteredProducts.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price}`;
    productList.appendChild(li);
  });
}

// Función para manejar la búsqueda de productos
function filterProducts() {
  const searchText = document
    .getElementById("search-input")
    .value.toLowerCase(); // Convertir a minúsculas para búsqueda insensible a mayúsculas
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText)
  );
  renderProducts(filteredProducts);
}

// Mostrar la lista completa de productos al cargar la página
renderProducts(products);

// Agregar evento al botón de búsqueda
document.getElementById("search-btn").addEventListener("click", filterProducts);
