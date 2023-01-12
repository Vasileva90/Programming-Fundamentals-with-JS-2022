function maxNumber(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let number1 = array[i];
        let isLargest = true;
        for (let j = i + 1; j < array.length; j++) {
            let number2 = array[j];
            if (number1 <= number2) {
                isLargest = false;
            }
        }
        if (isLargest) {
            newArray.push(number1);
        }
    }
    console.log(newArray.join(" "));
}

maxNumber([1, 4, 3, 2]);