// function saludar() {
//   // cuerpo de la funcion
// }
// const saludar2 = function () {
//   // cuerpo de la funcion
// };

// const saludar3 = () => {
//   // cuerpo de la funcion
// };

// function miFuncion(){
//   let contador = 1;
//   function verContador() {
//     console.log(contador);
//   }
//   verContador();
// }

// miFuncion()
// const nums = [1, 0];
// console.log(nums);
// agregar elementos
// nums.push(7,5,9,-100); //al final
// // console.log(nums);

// //agreagr al inicio
// nums.unshift(2,67,Infinity,-Infinity)

// // console.log(nums);

// //quitar elementos del final
// nums.pop()
// // console.log(nums);
// //quitar elementos del principio
// nums.shift()
// // console.log(nums);

// //slice
// const tajada = nums.slice(2, 4);
// console.log(nums);
// console.log(tajada);

// //splice
// nums.splice(2,1)
// console.log(nums);

// const matriz= [["jose", "pepe", 0], [true, false, 5]]
// console.log(matriz[1][0]);

const numeros = [1, 93, 2, -39, 4, 10, 44];

const triplicado = [];

function triplicar(el) {
  return triplicado.push(el * 3);
}

function porCadaUno(arr, cb) {
  //numeros, alert
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]); //alert(numeros[i])
  }
}

porCadaUno(numeros, triplicar);

// console.table(numeros);
// console.table(triplicado);

//devolver funciones

const asignarOperacion = (op) => {
  switch (op) {
    case "+":
      return (n1, n2) => n1 + n2;
    case "-":
      return (n1, n2) => n1 - n2;
    case "*":
    case "x":
      return (n1, n2) => n1 * n2;

    default:
      return () => "op no valida";
  }
};

const sumar = asignarOperacion("+");
const restar = asignarOperacion("-");
const multi = asignarOperacion("x");

// console.log(sumar(2,4));
// console.log(restar(2,4,0));
// console.log(multi(2,4));
// forEach
// numeros.forEach((num) => {
//   console.log(num);
// });

const nombres = ["juan", "magali", "xabi", "emanuel", "julian"];
const productos = ["papa", "cebolla", "harina", "fideos", "pan"];

// nombres.forEach((el)=>{
//   console.log("Hola, " + el);
// })

//buscar find( ) encuentra el primer elemento si no devuelve undefined
const nombreConA = nombres.find((el) => el.includes("J"));
// console.log(nombreConA);
// console.log(numeros);
const mayorQue10 = numeros.find((el) => el > 10);
// console.log(mayorQue10);

//filter devuelve un array
// let buscarNombre = prompt("Ingresa el nombre de los alumnos");

// const filtrado = nombres.filter((el) => {
//   return el.includes(buscarNombre);
// });

// console.log(filtrado);

function buscarPor(arr, param){
  return arr.find((el)=> el.includes(param)) 
}


const encontrado = buscarPor(productos, "p")
const encontrado2 = buscarPor(nombres, "x")
console.log(encontrado);
console.log(encontrado2);
