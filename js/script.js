// funzioni
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

function noRepeatNumber(array, num) {
  // oppure array.includes(num)
  return (array.indexOf(num) === -1);
}

function errorNumber(num) {
  return (isNaN(num) || num < 1 || num > 100 || num.length > 3);
}

// variabili
var numeroRandom;
var numeriComputer = [];
var numeroScelto;
var numeriUtente = [];
var testoPunteggio = document.getElementById('punteggio');

// IL COMPUTER DEVE GENERARE 16 NUMERI CASUALI DA 1 A 100 CHE NON POSSONO ESSERE DUPLICATI
// creo un ciclo che si ripete fino a che l'array  ha 16 elementi e ogni volta pusho il numero randomico nell'array numeriComputer SOLO SE ancora non lo include
while (numeriComputer.length < 16) {
  numeroRandom = randomNumber(1, 100);
  // controllo che non ci siano numeri uguali nell'array
  if (noRepeatNumber(numeriComputer, numeroRandom)) {
    numeriComputer.push(numeroRandom);
  }
}
console.log('I numeri randomici creati dal computer sono: ' + numeriComputer);
// CHIEDO ALL'UTENTE MAX 84 VOLTE DI INSERIRE UN NUMERO COMPRESO TRA 1 E 100; NON PUO' INSERIRE PIU' VOLTE LO STESSO NUMERO
// e  il ciclo continua fino a che il numero inserito dall'utente corrisponde a uno dei numeri randomici creati dal computer
while (!numeriComputer.includes(numeroScelto) && numeriUtente.length < 84) {
  numeroScelto = prompt('Inserisci un numero da 1 a 100');
  if (errorNumber(numeroScelto)) {
    alert('Inserisci un numero da 1 a 100');
  } else {
    numeroScelto = parseInt(numeroScelto);
    // ricontrollo che il numero inserito dall'utente non corrisponda a uno dei numeri randomici
    if (noRepeatNumber(numeriUtente, numeroScelto) && !numeriComputer.includes(numeroScelto)) {
      numeriUtente.push(numeroScelto);
    }
    console.log(numeroScelto);
  }
}

testoPunteggio.innerHTML = 'Il tuo punteggio è ' + (numeriUtente.length);
