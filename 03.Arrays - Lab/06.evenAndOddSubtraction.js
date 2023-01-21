function evenAndOddSubtraction(array) {
    let evenSum = 0;
    let oddSum = 0;
    for(let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
    }
    for (let number of array) {
        if(number % 2 === 0) {
           evenSum += number;
        } else {
            oddSum += number;
        }
    }
    let diff = evenSum - oddSum;
    console.log(diff);
}

evenAndOddSubtraction([2,4,6,8,10]);