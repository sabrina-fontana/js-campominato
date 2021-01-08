// funzioni
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

function noRepeatNumber(array, num) {
  return (array.indexOf(num) === -1);
}

// variabili
var numeroRandom;
var numeriComputer = [];
var numeroScelto;
var numeriUtente = [];
var incluso;

// IL COMPUTER DEVE GENERARE 16 NUMERI CASUALI DA 1 A 100 CHE NON POSSONO ESSERE DUPLICATI
// creo un ciclo che si ripete fino a che l'array ha 16 elementi e ogni volta pusho il numero randomico nell'array numeriComputer SOLO SE ancora non lo include
while (numeriComputer.length < 16) {
  numeroRandom = randomNumber(1, 100);
  // controllo che non ci siano numeri uguali nell'array
  if (noRepeatNumber(numeriComputer, numeroRandom)) {
    numeriComputer.push(numeroRandom);
  }
}
console.log(numeriComputer);
// CHIEDO ALL'UTENTE N VOLTE DI INSERIRE UN NUMERO COMPRESO TRA 1 E 100; NON PUO' INSERIRE PIU' VOLTE LO STESSO NUMERO
// il ciclo continua fino a che il numero inserito dall'utente corrisponde a uno dei numeri randomici creati dal computer
while (!numeriComputer.includes(numeroScelto)) {
  numeroScelto = parseInt(prompt('Inserisci un numero da 1 a 100'));
  if (noRepeatNumber(numeriUtente, numeroScelto)) {
    numeriUtente.push(numeroScelto);
  }
  console.log(numeroScelto);
}
