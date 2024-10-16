const card = document.querySelector(".card");
const btn = document.querySelector("#btn"),
  contenedor = document.querySelector(".contenedor");

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
  },
];

btn.addEventListener("click", () => {
  setTimeout(() => {
    card.classList.remove("active");
  }, 2500);
  card.classList.add("active");
});

//asincronía
function square(num) {
  return num * num;
}

function logSquare(num) {
  console.log(square(num));
}

// logSquare(2);

// AJAX
// 1s = 1000ms

// console.log("Primera tarea");
// setTimeout(() => {
//   console.log("Segunda tarea");
// }, 1000);

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let token = "";

// console.log("Tercera tarea");
//call stack
// event loop
// setInterval(() => {
//   for (let i = 0; i < 6; i++) {
//     let aleatorio = Math.floor(Math.random() * numeros.length);
//     token = token + numeros[aleatorio];
//   }
//   console.log(token);
//   // window.location.reload();
// }, 1000);
// pintar por el DOM el token aleatorio cada 2s
// let contenedorSegundos = document.getElementById("segundos");
// let contenedorMinutos = document.getElementById("minutos");

// let segundos = 0;
// let minutos = 0;

// // setTimeout() -> se ejecuta una sola vez
// // setInterval() -> se ejecuta en un INTERVALO (constantemente)

// setInterval(() => {
//   contenedorSegundos.textContent = segundos;
//   contenedorMinutos.textContent = minutos;
//   segundos++;

//   if (segundos > 59) {
//     segundos = 0;
//     minutos++;
//   }
// }, 100);
// PROMESAS 3 states = pending fulfilled rejected

const promesa = new Promise((resolve, reject) => {
  // cuerpo de la promesa
});
// console.log(promesa);

// const eventoFuturo = (response) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (response === true) {
//         resolve("Promesa resuelta");
//       } else {
//         reject("Promesa rechazada");
//       }
//     });
//   }, 2500);
// };

// console.log(eventoFuturo(true));
// console.log(eventoFuturo(false));
// console.log("Fin del script");

const devolverCampera = (response) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (response === "si") {
        resolve("Si tomá aca está");
      } else {
        reject("Uh no la perdí");
      }
    });
  }, 2500);
};

console.log("Hola Xabi te acordas la campera que te presté");
const respuesta = devolverCampera("...")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
// console.log("Dale gracias");
