/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

//chiedere una parola
let userWord = prompt('Scrivi una parola per vedere se è una palindroma');

// // trasformare la parola user in array
// let userWordArray = Array.from(userWord);
// console.log(userWordArray);

// // convertire l'array in stringa
// let wordToString = userWordArray.join()

// // invertire gli elementi dell'array
// let reverse = userWordArray.reverse();
// console.log(reverse);

// // convertire l'array invertito in stringa
// const reverseToArray = reverse.join();
// console.log(reverseToArray);

// //result
const resultPalindroma = isPalindroma(userWord);
console.log(resultPalindroma);

/**
 * Description
 * @param {any} stringToCheck -> any string to check if it's palindrome
 * @returns {any} -> true if it's palindrome, false otherwise
 */
function isPalindroma(stringToCheck) {
//     let result;

//     if (wordToString === reverseToArray) {
//         result = 'la tua parola è una palindroma';
//     } else {
//         result = 'scrivi un altra parola';
//     }
//     return result;




// ------ class code

let reverseString = "";

for (let i = stringToCheck.length - 1; i >= 0; i--) {
    reverseString += stringToCheck[i];
}

console.log(reverseString);

let isPalindrome = false;
if (reverseString === stringToCheck) {
    isPalindrome = true;
}

return isPalindrome;

}