function sumFirstAndLast(array) {
    let firstNum = array.shift();
    let lastNum = array.pop();
    let sum = Number(firstNum) + Number(lastNum);
    console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);