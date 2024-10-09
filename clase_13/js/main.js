const contenedor = document.querySelector("#contenedor");
const inputs = document.querySelectorAll("input");
const p = document.querySelector("#message");
const form = document.querySelector("#form-login");
const listado = document.getElementById("lista");
//variables auxiliares para acceder a los inputs por separado
const inputUser = inputs[0];
const inputPass = inputs[1];
const check = inputs[2];
const btnIngresar = inputs[3];

const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
    stock: 2,
  },
];
const paises = [
  "Argentina",
  "Colombia",
  "Brasil",
  "México",
  "Uruguay",
  "Venezuela",
  "Perú",
  "Chile",
  "Polonia",
  "Canada",
];
//Funciones de búsqueda
function buscarServicio(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro);
  });
  return encontrado;
}
function filtrarServicio(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}

// Función para crear estructura html
function crearHtml(arr) {
// validar si arr no es un array
  contenedor.innerHTML = "";

  let html;
  for (const servicio of arr) {
    html = `<div class="card">
                <img src="./img/${servicio.img}" alt="${servicio.nombre}">
                <hr>
                <h3>${servicio.nombre}</h3>
                <p>Precio: $${servicio.precio} </p>
                  <div class="card-action">
                    <button class="btn btn-success" id="${servicio.id}">Agregar</button>
                  </div>
              </div>`;
    //se la agrego al contenedor
    contenedor.innerHTML += html;
  }
}

paises.push("Nigeria")

for (const pais of paises) {
  const li = document.createElement("li");
  li.textContent = pais;

  listado.appendChild(li);
}
crearHtml(servicios)
const buscar= inputs[4]

buscar.addEventListener('keyup', ()=>{
  console.log(buscar.value);
  const filtrados= filtrarServicio(servicios, buscar.value)

  console.log(filtrados);
  crearHtml(filtrados)
  
})

//almacenamiento local 5 y 10 MB

//guardar informacion
localStorage.setItem("saludo", "Hola tarola")
localStorage.setItem('dark-mode', true)
localStorage.setItem("edad", 41)
//ver informacion
const saludo= localStorage.getItem("saludo")
const darkMode= localStorage.getItem("dark-mode")  === "true"
const edad = Number(localStorage.getItem("edad"));
// console.log(saludo);
// console.log(darkMode);
// console.log(edad);
const usuario= {id: 1, nickname:"ElBarto"}
const usuarioEnJSON= JSON.stringify(usuario)

localStorage.setItem("user", usuarioEnJSON)

const usuarioLS = JSON.parse(localStorage.getItem("user"));
console.log(usuarioLS);
console.log(usuarioLS.id);
console.log(usuarioLS.nickname);
//JSON (stringify) (parse)

