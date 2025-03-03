/* Scrivi una funzione che accetti un array di nomi e restituisca un nuovo array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
// function
function firstLetterFunc(arrayNamesFunc) {

    const arrayLetters = [];
    let temp = '';

    for (let i = 0; i < arrayNamesFunc.length; i++) {

        temp = arrayNamesFunc[i];
        arrayLetters.push(temp[0]);
    }

    return arrayLetters;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(firstLetterFunc(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]