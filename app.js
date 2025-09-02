//bienvenida//
alert("¡Bienvenido al juego de Piedra, Papel o Tijera!");

//pedir al usuario un elemento//
let elementoDELusuario = prompt("Elige uno: piedra, papel o tijera");

//mandar a la consola el elemento que elegi//
console.log("Tú elegiste:" + elementoDELusuario);

//elemnto secreto al que adivinar// 
let elementoSecreto = "piedra";   

//if gane o solo si adivine la piedra
//  y 
// else perdi o una alternativa si no adivine la piedra//
if (elementoDELusuario == elementoSecreto) {
  alert("¡Adivinaste el elemento secreto!");
} else {
  alert("No adivinaste...");
}
