function ladybugs(input) {
    let n = input.shift();
    let field = new Array(n).fill(0);
    let ladyBugIndexes = input.shift().split(" ");
    for (let index of ladyBugIndexes) {
        index = Number(index);
        if (index < 0 || index >= n) {
            continue;
        }
        field[index] = 1;
    }

    for (let command of input) {
        let tokens = command.split(" ");
        let currentIndex = Number(tokens[0]);
        let direction = tokens[1];
        let jumpLength = Number(tokens[2]);
        
        if(currentIndex < 0 || currentIndex >= field.length || field[currentIndex] !== 1) {
           continue;
        }

        field[currentIndex] = 0;
        if (direction === "left") {
            jumpLength = -jumpLength;
        }

        currentIndex += jumpLength;
        while (currentIndex >= 0 && currentIndex < field.length) {
            if(field[currentIndex] === 0) {
               field[currentIndex] = 1;
               break;
            }
            currentIndex += jumpLength;
        }
    }
    console.log(field.join(" "));
}

ladybugs([3, '0 1',
    '0 right 1',
    '2 right 1']);