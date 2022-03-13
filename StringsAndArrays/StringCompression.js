/**
 * 
 * @param {string} longString 
 */
function compressString(longString) {

    let compressedString = '';
    let currentLetter;
    let currentCount = 1;
    

    longString.split('').forEach(x => {
        if (!currentLetter) {
            currentLetter = x;
        } else if (currentLetter !== x) {
            compressedString += `${currentLetter}${currentCount}`;
            currentLetter = x;
            currentCount = 1;
        } else {
            currentCount++;
        }
    });


    compressedString += `${currentLetter}${currentCount}`;
    return compressedString;
}

console.log('Result: ', compressString('aabcccccaaaAA'));
