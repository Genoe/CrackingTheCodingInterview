/**
 * 16.4 Tic Tac Win: Design an algorithm to figure out if someone has won a game of tic-tac-toe. 
 */

/**
 * 
 * @param {number[][]} x 
 */
function calculate(x) {
    // calculate first position 
    let start = x[0][0];

    let winner = false;

    winner = false;

    for(let i = 0; i < x[0].length; i++) {
        winner = calcuateRightWards(x, i);

        if (winner) return winner;
    }

    for(let i = 0; i < x[0].length; i++) {
        winner = calculateDownwards(x, i);

        if (winner) return winner;
    }

    winner = calculateDiagonals(x);

    return winner;
}

/**
 * 
 * @param {number[][]} x 
 */
function calcuateRightWards(x, rowIndex) {
    let playerSymbol = x[0][rowIndex];

    for(let i = 0; i < x[0].length; i++) {
        if (x[i][rowIndex] !== playerSymbol) {
            return false;
        }
    }

    return playerSymbol;
}

/**
 * 
 * @param {number[][]} x 
 */
function calculateDownwards(x, columnIndex) {
    let playerSymbol = x[columnIndex][0];

    for(let i = 0; i < x[columnIndex].length; i++) {
        if (x[columnIndex][i] !== playerSymbol) {
            return false;
        }
    }

    return playerSymbol;
}

/**
 * @param {number[][]} x
 */
function calculateDiagonals(x) {
    // return x[0][0] === x.at(-1).at(-1) || x.at(-1)[0] === x[0].at(-1);
    if (x[0][0] === x.at(-1).at(-1)) {
        return x[0][0];
    }

    if (x.at(-1)[0] === x[0].at(-1)) {
        return x.at(-1)[0];
    }
}

//var board = [['x','x','o'],['x','x','o'],['x','o','o']]; // bad board with x and o winning. But x should be the result
var board = [['x', 'o', 'x'], ['x', 'x', 'o'], ['o', 'o', 'x']]; // false

var result = calculate(board);

console.log('Result: ', result);
