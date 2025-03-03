/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

// Dichiara la funzione qui.
// function
function greetingFunc(userNameFunc) {

    return `Hi ${userNameFunc}`;
}

// arrow function
const greetingArr = (userNameArr) => `Hi ${userNameArr}`;


// Invoca la funzione qui e stampa il risultato in console
// print result with function
console.log(greetingFunc(userName));

// print result with arrow function
console.log(greetingArr(userName));


//Risultato atteso se si passa 'Mario': // ciao Mario
