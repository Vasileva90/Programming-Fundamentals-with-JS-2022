function arrayManipulator(numbers, commands) {
    for (let command of commands) {
        let tokens = command.split(" ");
        let currCommand = tokens[0];
        if (currCommand === "add") {
            let index = Number(tokens[1]);
            let element = Number(tokens[2]);
            numbers.splice(index, 0, element);
        } else if (currCommand === "addMany") {
            let index = Number(tokens[1]);
            tokens.splice(0, 2);
            let numbersToAdd = tokens.map(Number);
            numbers.splice(index, 0, ...numbersToAdd);
        } else if (currCommand === "contains") {
            let result = numbers.indexOf(Number(tokens[1]));
            console.log(result);
        } else if (currCommand === "remove") {
            let index = Number(tokens[1]);
            numbers.splice(index,1);
        } else if (currCommand === "shift") {
            let position = Number(tokens[1]);
            for(let i = 0; i < position; i++) {
                let firstNumber = numbers.shift();
                numbers.push(firstNumber);
            }
        } else if (currCommand === "sumPairs") {
            let resArr = [];
            if(numbers.length % 2 !== 0) {
               numbers.push(0);
            }
            for(let i = 0; i < numbers.length - 1; i += 2) {
                let sum = numbers[i] + numbers[i + 1];
                resArr.push(sum);
            }
            numbers = resArr;
        } else if (currCommand === "print") {
            console.log(`[ ${numbers.join(", ")} ]`);
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7, 8],
    ['sumPairs', 'print']);