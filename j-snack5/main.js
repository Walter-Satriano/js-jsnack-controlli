/*JSnack #5:
Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array*/

// Dichiarazione variabili
var numUtente;


// Creo un array vuoto
var numArray = [];


// Chiedo per 6 volte all'utente di inserire un numero
for (var i = 0; i < 6; i++) {
  numUtente = parseInt(prompt("Inserisci un numero"));
  console.log("numero inserito: " + numUtente);

  // se il numero inserito dall'utente è dispari lo inserisco nell'array
  if (numUtente % 2 != 0) {
    numArray.push(numUtente);
  }
}

console.log(numArray);
