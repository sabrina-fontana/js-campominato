// funzione per generare numero randomico
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}
var numeriComputer = [];
var numeroRandom;
// creo un ciclo che si ripete fino a che l'array non ha 16 elementi e ogni volta pusho il numero randomico nell'array numeriComputer SOLO SE ancora non lo include
while (numeriComputer.length < 16) {
  numeroRandom = randomNumber(1, 100);
  // controllo che non ci siano numeri uguali nell'array
  if (numeriComputer.indexOf(numeroRandom) === -1) {
    numeriComputer.push(numeroRandom);
  }
}
