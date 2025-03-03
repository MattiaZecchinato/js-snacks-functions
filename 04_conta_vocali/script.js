/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function searchVowels(stringFunc) {

    // lower case vowels array
    const arrayVowels = ['a', 'e', 'i', 'o', 'u'];

    // transforms the parameter word to lower case
    let temp = stringFunc.toLowerCase();
    // inizialize variable count and set to 0
    let count = 0;

    // iterations for parameter word
    for (let i = 0; i < stringFunc.length; i++) {

        // iterations for vowels array
        for (let j = 0; j < arrayVowels.length; j++) {

            // check if letter is equal to a vowel
            if (stringFunc[i] === arrayVowels[j]) {

                count++;
                console.log(stringFunc[i]);
            }
        }
    }

    return count;
}


// Invoca la funzione qui e stampa il risultato in console
const result = searchVowels(word);
console.log(`The word \'${word}\' have ${result} vowels`);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)