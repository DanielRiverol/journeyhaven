//ES5
var nombre; //declaracion
nombre = "Xabi"; //asignacion

var apellido = "Gallardo"; //inicializacion
var nombre = "Ruben";
//ES6
let user;
user = "Juan";
let user1 = "pedro";

user = "jose";

const PI = 3.1416;
const GRAVEDAD = 9.8;

// PI = 4;

console.log(PI);

// alert("Hoila")
// let nombreUsuario = prompt("Ingresa tu nombre");
// alert("Hola, " + nombreUsuario);

let ingreso = prompt("Ingresa tu edad", "Solo numeros");
//metodos de oarseo
// ingreso = parseInt(ingreso);
// ingreso = parseFloat(ingreso);

// ingreso = Number(ingreso);
// ingreso = Number.parseInt(ingreso);
ingreso = +ingreso;

if (!isNaN(ingreso)) {
    console.log("En 3 años vas a tener: " + (ingreso + 3));
} else {
    console.log("El valor ingresado no es un numero " + ingreso);
}
