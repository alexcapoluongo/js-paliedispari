/**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/ 

//user decides even or odd
const userChoice = prompt('Odd or Even');

// user chooses a number from 1 to 5
const userNumber = parseInt(prompt('Choose a number from 1 to 5'));
console.log(userNumber);

// computer generate a number with function

const generatedNumber = generatedComputerN(1, 5);
console.log(generatedNumber);

// even or odd with function 
const resultSum = evenOrOdd();
console.log(resultSum);

//deciding who won 

if (userChoice === 'even' && resultSum === 'even') {
    console.log('you won');
} else if (userChoice === 'odd' && resultSum === 'odd'){
    console.log('you won');
} else {
    console.log('sorry, computer won');
}


// FUNCTION 
/**
 * Description: Generate a number from 1 to 5 for the Computer
 * @param {any} min: generates a rand number from a min n (1)
 * @param {any} max: generates a rand number to a max (5)
 * @returns {any}: elaborate the function in the program
 */

function generatedComputerN(min, max) {
    //algorithm to create a number
    const computerNumber = Math.floor(Math.random()* (max-min+1)) + min;
    return computerNumber;
}

/**
 * Description: Decide if the sum is even or odd
 * @returns {Number}: gives the anwer of the algorithm to the program
 */

    function evenOrOdd(){
    //var
    let sum = userNumber + generatedNumber;
    let result;

    //algorithm
    if (sum % 2 === 0) {
        result = "even";
    } else {
        result = "odd";
    }

    return result;
}
