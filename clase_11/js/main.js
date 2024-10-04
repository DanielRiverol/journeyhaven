// objetos literales
const persona1 = {
  nombre: "juan",
  tel: "4567890",
  direccion: "calle falsa 123",
  email: "juan@mail.com",
  edad: 35,
};
const persona2 = {
  nombre: "pablo",
  tel: "+5499876578",
  direccion: "lacarra 4123",
  email: "pablo@mail.com",
  tel_laboral: "11543245678",
};

// console.log("nombre" in persona1);
// console.log("edad" in persona2);

// for(const key in persona2){
//     // console.log(key);
//     console.log(key ,persona2[key]);

// }
// console.log(persona1);
// //aceso a propiedades
// console.log(persona1.nombre);
// console.log(persona1.tel);
// console.log(persona1.direccion);
// console.log(persona1.email);
// console.log(persona1.edad);
// //persoan2
// console.log(persona2["nombre"]);
// console.log(persona2.tel);
// console.log(persona2.direccion);
// console.log(persona2.email);
// console.log(persona2["tel_laboral"]);

// //agregando valore
// persona1.tel_laboral="2345676543"
// console.log(persona1);
// console.log(persona2);
// persona2.direccion = "av siempreviva 742"
// console.log(persona2);

//funcion constructora
// function Personaje(nombre, poder, vida) {
//   this.nombre = nombre;
//   this.poder = poder;
//   this.vida = +vida;
//   // metodo
//   this.saltar = function () {
//     console.log(this.nombre, " dice: Estoy saltando");
//   };
//   this.restarVida = (danio) => {
//     if (danio) {
//       this.vida--;
//     }
//   };
// }

//clase
class Personaje {
  constructor(nombre, poder, vida) {
    this.nombre = nombre;
    this.poder = poder;
    this.vida = +vida;
  }
// metodos
  saltar(){
    console.log(this.nombre, " dice: Estoy saltando");
  }
  restarVida = (danio) => {
    if (danio) {
      this.vida--;
    }
  };
}

const mario = new Personaje("mario", "estrella", "3");
console.log(mario);

mario.saltar();
const luigi = new Personaje("luigi", "flor de fuego", "5");

console.log(luigi);

luigi.restarVida(1);
console.log(luigi.vida);
mario.restarVida(1);
console.log(mario.vida);

const cajaMeme= document.querySelector('div.meme')

cajaMeme.addEventListener('mouseenter', ()=>{
    cajaMeme.style.backgroundImage= 'url(./img/estados.jpg)'
})
cajaMeme.addEventListener('mouseleave', ()=>{
    cajaMeme.style.backgroundImage= 'url(./img/australia.jpg)'
})
cajaMeme.addEventListener('click', ()=>{
    cajaMeme.style.backgroundImage= 'url(./img/pum.png)'
})
