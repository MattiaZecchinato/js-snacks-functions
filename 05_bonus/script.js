/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function greetingTime(userNameFunc) {

    // get hours
    const d = new Date();
    let time = d.getHours();
    console.log(time);

    if (time <= 13) {

        console.log(`Good morning ${userNameFunc}`);
    }
    else if (time <= 17) {

        console.log(`Good afternoon ${userNameFunc}`);
    }
    else {

        console.log(`Good evening ${userNameFunc}`);
    }
}


// Invoca la funzione qui e stampa il risultato in console
greetingTime(name);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.