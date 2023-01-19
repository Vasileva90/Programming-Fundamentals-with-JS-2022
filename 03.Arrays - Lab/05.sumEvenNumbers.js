function sumEvenNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let temp = Number(array[i]);
        if (temp % 2 === 0) {
            sum += temp;
        }
    }
    console.log(sum);
}

sumEvenNumbers(['2', '4', '6', '8', '10']);