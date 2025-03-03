/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

// Dichiara la funzione qui.
// function
function greeting(userNameFunc) {

    return `Hi ${userNameFunc}`;
}

// arrow function
const greetingArrow = (userNameArr) => `Hi ${userNameArr}`;


// Invoca la funzione qui e stampa il risultato in console
// print result with function
console.log(greeting(userName));

// print result with arrow function
console.log(greetingArrow(userName));


//Risultato atteso se si passa 'Mario': // ciao Mario
