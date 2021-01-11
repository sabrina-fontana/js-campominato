// funzioni
function levelNotValid(levelInput) {
  return (levelInput !== '0' && levelInput !== '1' && levelInput !== '2');
}

function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

function noRepeatNumber(array, num) {
  // oppure array.includes(num)
  return (array.indexOf(num) === -1);
}

function errorNumber(num, max) {
  return (isNaN(num) || num < 1 || num > max || num.includes(' '));
}

// variabili
var sceltaLivello;
var numeroMax;
var numeroRandom;
var numeriComputer = [];
var numeroScelto;
var numeriUtente = [];
var testoPunteggio = document.getElementById('punteggio');

// ALL'INIZIO CHIEDO ALL'UTENTE IL LIVELLO DI DIFFICOLTÀ
// DIFFICOLTÀ 0 --> TRA 1 E 100
// DIFFICOLTÀ 1 --> TRA 1 E 80
// DIFFICOLTÀ 2 --> TRA 1 E 50
sceltaLivello = prompt('Scegli il livello di difficoltà: 0, 1 oppure 2');
if (levelNotValid(sceltaLivello)) {
  alert('Ínserisci un valore valido. 0, 1 o 2.');
} else {
    switch (sceltaLivello) {
      case '0':
      numeroMax = 100;
      break;
      case '1':
      numeroMax = 80;
      break;
      case '2':
      numeroMax = 50;
    }
    // IL COMPUTER DEVE GENERARE 16 NUMERI CASUALI DA 1 A NUMEROMAX CHE NON POSSONO ESSERE DUPLICATI
    // creo un ciclo che si ripete fino a che l'array ha 16 elementi e ogni volta pusho il numero randomico nell'array numeriComputer SOLO SE ancora non lo include
    while (numeriComputer.length < 16) {
      numeroRandom = randomNumber(1, numeroMax);
      // controllo che non ci siano numeri uguali nell'array
      if (noRepeatNumber(numeriComputer, numeroRandom)) {
        numeriComputer.push(numeroRandom);
      }
    }
    console.log('I numeri randomici creati dal computer sono: ' + numeriComputer);
    // CHIEDO ALL'UTENTE MAX tot VOLTE DI INSERIRE UN NUMERO COMPRESO TRA 1 E NUMEROMAX; NON PUO' INSERIRE PIU' VOLTE LO STESSO NUMERO
    //il ciclo continua fino a che il numero inserito dall'utente corrisponde a uno dei numeri randomici creati dal computer oppure raggiunge il numero max di tentativi
    while (!numeriComputer.includes(numeroScelto) && numeriUtente.length < (numeroMax - 16)) {
      numeroScelto = prompt('Inserisci un numero da 1 a ' + numeroMax);
      if (errorNumber(numeroScelto, numeroMax)) {
        alert('Inserisci un valore corretto');
      } else {
        numeroScelto = parseInt(numeroScelto);

        if (!noRepeatNumber(numeriUtente, numeroScelto)) {
          alert('Non puoi inserire lo stesso numero più volte.');
        } else if (!numeriComputer.includes(numeroScelto)) {
          numeriUtente.push(numeroScelto);
        }
        console.log(numeroScelto);
      }
    }
    testoPunteggio.innerHTML = 'Il tuo punteggio è ' + (numeriUtente.length);
    // se l'utente vuole giocare ancora ricarico la pagina al click sul button
    testoPunteggio.innerHTML += '<br><br><button onClick="window.location.reload();">Vuoi giocare ancora?</button>';
  }
