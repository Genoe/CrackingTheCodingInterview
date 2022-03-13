/**
 * Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
 * A palindrome is a word or phrase that is the same forwards and backwards. A permutation
 * is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.     
 */

/**
 * 
 * @param {string} myString 
 */
function isPalindromePermutation(myString) {
    myString = myString.toLowerCase();
    const letterMap = new Map();

    myString.split('').forEach(x => {
        if (x !== ' ') {
            if (letterMap.has(x)) {
                // var newValue = letterMap.get(x) + 1;
                letterMap.set(x, letterMap.get(x) + 1);
            } else {
                letterMap.set(x, 1);
            }
        }
    });

    let middleValue;
    let notPalendrome = true;

    letterMap.forEach((value, key) => {
        if (value === 1 && !middleValue) {
            middleValue = 1;
        } else if (value % 2 !== 0) {
            notPalendrome = false;
        }
    });

    return notPalendrome;
}

console.log('Result: ', isPalindromePermutation('Tact Coa'));
