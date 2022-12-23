function equalNeighbors(input) {
    let counter = 0;

    for (let row = 0; row < input.length - 1; row++) {
        for (let col = 0; col < input[row].length; col++) {
            if (input[row][col] === input[row + 1][col]) {
                counter++;
            }
            if (input[row][col] === input[row][col + 1]) {
                counter++;
            }
            if(row === input.length - 2 && input[row + 1][col] === input[row + 1][col + 1]) {
                counter++;
            }
        }
    }
    console.log(counter);
}

equalNeighbors([['test', 'yo', 'yo', 'ho'],
                ['well', 'done', 'no', '6'],
                ['not', 'done', 'yet', '5']]);