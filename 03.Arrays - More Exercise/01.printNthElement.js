function printNthElement(array) {
    let newArray = [];
    let n = Number(array[array.length - 1]);
    for(let i = 0; i < array.length - 1; i += n) {
        newArray.push(array[i]);
    }
    console.log(newArray.join(" "));
}

printNthElement(['1', '2', '3', '4', '5', '6']);