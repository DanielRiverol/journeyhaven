// sintaxis
// sugar sintax
let num = 10;

num = num + 1;
num += 1;
num++;
// console.log(num);

// if (5 < 3) {
//   console.log("es verdad");
// } else {
//   if (6 < 8) {
//     console.log("es verdad");
//   } else {
//     console.log("es mentira");
//   }
//   console.log("es mentira");
// }
// op ternario condicion ? true : false

//  5 <3
//    ? console.log("es verdad1")
//    : 6 < 8
//    ? console.log("es verdad2")
//    : console.log("es mentira");
const user = {
  nombre: "juan",
  edad: 13,
};
// let permiso;
// if (user.edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if (permiso) {
//   console.log("Podes entrar al casino");
// } else {
//   console.log("NO Podes entrar al casino");
// }

// const permiso = user.edad >= 18 ? true : false;

// permiso
//   ? console.log("Podes entrar al casino")
//   : console.log("NO Podes entrar al casino");

// && AND devuelve true && esto lo vas a ver

// const carrito = [];

// if (carrito.length == 0) {
//   console.log("Carrito vacio");
// }

// carrito.length == 0 && console.log("Carrito vacio");
// coerción en JS
//  || OR  op1 || op2

const user2 = {
  nombre: "juan",
  edad: 13,
};

const user3=null
// console.log(user2 || "El usuario no existe");
// console.log(user3 || "El usuario no existe");


// let carrito;

// if(localStorage.getItem("carrito")){
//     carrito = JSON.parse(localStorage.getItem("carrito"));
// }else{
//     carrito = []
// }
// console.log(carrito);

localStorage.setItem("carrito", JSON.stringify(servicios))
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// console.log(carrito);
