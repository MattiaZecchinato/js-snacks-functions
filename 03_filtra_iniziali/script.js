/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function letterFindNames(arrayNameFunc, letterFunc) {

    const arrayNameSearch = [];
    let temp = '';

    for (let i = 0; i < arrayNameFunc.length; i++) {

        temp = arrayNameFunc[i];

        if (temp[0] === letterFunc) {

            arrayNameSearch.push(temp);
        }
    }

    return arrayNameSearch;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(letterFindNames(names, 'A'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]