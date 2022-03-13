/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
 * cannot use additional data structures? 
 */

 function isUnique(data) {
    const evaluatedCharacters = new Set();
    for (const char of data) {
        console.log(char)
        if (!evaluatedCharacters.has(char)) {
            evaluatedCharacters.add(char);
        } else {
            return false;
        }
    }
    return true;
}

/**
 * 
 * @param {String} data 
 */
function isUniqueNoDataStruc(data) {
    var cntr = 0;
    for (var i = 0; i < data.length; i++) {
        for (var j = i + 1; j < data.length; j++) {
            if (data[i] == data[j]) {
                return false;
            }
        }
    }
    console.log('complexity: ', cntr, ' 4x3x2: ', 4*3*2);
    return true;
}


const string = 'tee';

// console.log(isUnique(string));

console.log(isUniqueNoDataStruc(string));
