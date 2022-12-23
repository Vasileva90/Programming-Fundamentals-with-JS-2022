function train(arr) {
    let numbers = arr.shift()
                    .split(" ")
                    .map(Number);
     
    let maxCapacity = Number(arr.shift());

    for(let i = 0; i < arr.length; i++) {
        let currArray = arr[i].split(" ");
        
        if(currArray[0] === ("Add")) {
            numbers.push(Number(currArray[1]));
        } else {
            for(let j = 0; j < numbers.length; j++) {
                if(Number(currArray[0]) + numbers[j] <= maxCapacity) {
                   numbers[j] += Number(currArray[0]);
                    break;
                }
            }
        }
    }
    console.log(numbers.join(" "));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);