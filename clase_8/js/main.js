//ES5
// var nombre; //declaracion
// nombre = "Xabi"; //asignacion

// var apellido = "Gallardo"; //inicializacion
// var nombre = "Ruben";
// //ES6
// let user;
// user = "Juan";
// let user1 = "pedro";

// user = "jose";

// const PI = 3.1416;
// const GRAVEDAD = 9.8;

// // PI = 4;

// console.log(PI);

// alert("Hoila")
// let nombreUsuario = prompt("Ingresa tu nombre");
// alert("Hola, " + nombreUsuario);

// let ingreso = prompt("Ingresa tu edad", "Solo numeros");
// //metodos de oarseo
// // ingreso = parseInt(ingreso);
// // ingreso = parseFloat(ingreso);

// // ingreso = Number(ingreso);
// // ingreso = Number.parseInt(ingreso);
// ingreso = +ingreso;

// if (!isNaN(ingreso)) {
//   console.log("En 3 años vas a tener: " + (ingreso + 3));
// } else {
//   console.log("El valor ingresado no es un numero " + ingreso);
// }

// confirm("Estas seguro que desea salir?")

// BUCLES

//i= i + 1, i += 1, i++
// for (let i = 0; i <= 10; i += 1) {
//   if (i % 2 === 0) {
//     console.log("Par");
//     continue;
//   }
//   console.log(i);
// }

// fizz - buzz numero % 5 === 0 fizz % 2 === 0 buzz

// for (let i = 0; i < 100; i++) {
//   if (i % 2 == 0 && i % 5 == 0) {
//     console.log("BUZZ FIZZ");
//     continue;
//   }
//   if (i % 2 == 0) {
//     console.log("Buzz");
//     continue;
//   } else if (i % 5 == 0) {
//     console.log("Fizz");
//     continue;
//   }

//   console.log(i);
// }
// averiguar cuando un num es primo (el n primo solo se divide 1  y por si mismo)

// break

let claveGuardada = "8734";
let usuarioGuardado = "xabi";
// for (let index = 1; index <= 3; index++) {
//   let ingreso = prompt("Ingresa tu clave");
//   if (ingreso === claveGuardada) {
//     alert("Ingreso exitoso");
//     break;
//   } else {
//     alert("La clave no coincide");
//   }
// }
// console.log("continua el codigo");
//

// let ingresoUsuario = prompt("Ingresa tu usuario");
// if (ingresoUsuario === usuarioGuardado) {
//   let ingresoClave = prompt("Ingresa tu clave");

//   if (ingresoClave === claveGuardada) {
//     alert("Bienvenido/a " + usuarioGuardado);
//   } else {
//     alert("Credenciales invalidas"); //que pondrias aca
//   }
// } else {
//   alert("Usuario no encontrado");
// }

// let ingresoClave = prompt("Ingresa tu clave");
// if (ingresoUsuario === usuarioGuardado && ingresoClave === claveGuardada) {
//   alert("Bienvenido/a " + usuarioGuardado);
// } else {
//   alert("Credencial;es invalidas");
// }

//crear un script valide la edad para votar < 16 no votan >=16 opcional 18 > hasta 65 = obligado >69 opcional
// let edadObligatoria = 18;
// let edadOptativa = 16;
// let edadLimite = 69;
// let edadUsuario = parseInt(prompt("Ingresá tu edad"));

// if (edadUsuario >= edadObligatoria && edadUsuario <= edadLimite) {
//   console.log("Esta obligado a votar");
// } else if (edadUsuario >= edadOptativa || edadUsuario > edadLimite) {
//   console.log("Podes votar si queres");
// } else {
//   console.log("No podes votar");
// }
//mientras
// let ingreso = prompt("Ingresa un producto");

// while (ingreso !== "0") {
//   console.log("Producto ingresado: " + ingreso);
//   // condicion de salida
//   ingreso = prompt("Ingresa un producto");
// }

// let edad = prompt("infrese su edad");
// let puedeVotar;
// edad = parseInt(edad);

// if (edad < 16) {
//   puedeVotar = "No puede Votar";
// } else if (edad < 18 || edad >= 65) {
//   puedeVotar = "Tiene la opcion de Votar";
// } else {
//   puedeVotar = "Tiene la obligacion de Votar";
// }
// console.log("Usted " + puedeVotar);

//funciones

// declaracion
function saludar() {
  console.log("Hola como estas?");
}

let resultado = 0;
console.log(resultado);

function calcular(n1, n2) {
  let resultado = n1 + n2;
  return resultado;
}

//invocar
// resultado = calcular(3, 5);
// console.log(resultado);

resultado = calcular(5, 5);
console.log(resultado);
// console.log(calcular(90, 67));
// funcion anónima
const restar = function (n1, n2) {
  return n1 - n2;
};
let numero1 = prompt("Ingresa el primer numero");
let numero2 = prompt("Ingresa el segundo numero");

// restar = "Hola mundo";

let resultResta = restar(+numero1, +numero2);

// console.log(resultResta);

// funcion flecha

const dividir = (n1, n2) => {
  if (n2 === 0) {
    return "no es posible dividir por 0";
  } else {
    return n1 / n2;
  }
};

// console.log(dividir(+numero1, +numero2));

//calcular
//realizamos una calculadora
function calculadora(n1, n2, op) {
  switch (op) {
    case "+":
      return n1 + n2;
      break;
    case "-":
      return n1 - n2;

    case "*":
      return n1 * n2;

    default:
      return "opcion no valida";
  }
}
let resSuma = calculadora(+numero1, +numero2, "+");
console.log(resSuma);
let resResta = calculadora(+numero1, +numero2, "-");
console.log(resResta);

// Tipos de funciones en JavaScript

// 1. Declaracion de funcion
// function nombreFuncion(param1, param2) {

// return resultado;
// }
// 2. Expresion de funcion
// const nombreFuncion = function(param1, param2) {}

// 3. Funciones flecha
// const multiplicar = (a, b) => a * b;
