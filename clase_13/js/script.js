// //MATH

// const PI = Math.PI;
// console.log(PI);
// console.log(Math.abs(-20394.45));
// // redondeo
// console.log(Math.floor(PI));
// console.log(Math.ceil(34.8));
// console.log(Math.round(PI));
// console.log(Math.round(23.5));

// // Math min max
// console.log(Math.min(23.5,4,1,-98,0,-Infinity));
// console.log(Math.max(-23.5,4,1,-98,0,-Infinity));

// //
// console.log(Math.floor(Math.random() * 100));


const numeros = [0,1,2,3,4,5,6,7,8,9]

let token ="";
for (let i = 0; i < 6; i++) {
    let aleatorio = Math.floor(Math.random() * numeros.length)
    token = token + numeros[aleatorio]
    
}

console.log(token);

const hexa = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let color = "";
for (let i = 0; i < 6; i = i + 1) {
  let aleatorio = Math.floor(Math.random() * hexa.length);
  /* console.log(aleatorio);
  console.log(hexa[aleatorio]); */
  color = color + hexa[aleatorio];
}

console.log(`#${color}`);
// document.body.style.backgroundColor = `#${color}`;
