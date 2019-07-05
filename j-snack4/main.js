/*JSnack #4:
In un array sono contenuti i nomi degli invitati
alla festa del grande Gatsby, chiedi all’utente il suo nome
e comunicagli se può partecipare o no alla festa.*/

// Dichiarazione variabili
var elemento = document.getElementById("invitati");
var listaInvitati, nomeUtente;
var invitatoTrovato = false;

// Creo array con lista invitati
listaInvitati = [
  "simone",
  "walter",
  "alessandra",
  "alessandro",
  "edoardo",
];

// Chiedo all'utente il suo nome
nomeUtente = prompt("Inserisci il tuo nome");

// Verifico che l'utente sia nella lista degli invitati
for (var i = 0; i < listaInvitati.length; i++) {

  // se l'utente è invitato allora stampo "complimenti"
  if (listaInvitati[i] == nomeUtente) {
    invitatoTrovato = true;
  }
}

// Stampo il messaggio relativo
if (invitatoTrovato) {
  elemento.innerHTML = "COMPLIMENTI! Sei stato invitato alla festa."
} else {
  elemento.innerHTML = "SPIACENTE! Non sei stato invitato alla festa."
}
