/*
*Esercizio:
*Lista Cognomi
*Chiedere all'utente il cognome
*inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'
*stampa la lista ordinata alfabeticamente
*scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
*/

// Creo Array con Cognomi
var lastName = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'];

// Chiedere all'utente il cognome
var askLastName = prompt('Inserisci il tuo cognome');

// Inserire nell'array altri cognomi
lastName.push(askLastName);
//console.log(lastName);

var order = lastName.sort();

// Risultato
var result = document.getElementById('lastname');

for (var i=0; i < order.length; i++)
{
  result.innerHTML = lastName;
}

console.log(lastName);

// La posizione "umana" della lista in cui il nuovo utente si trova
console.log( lastName.indexOf(askLastName) + 1);
