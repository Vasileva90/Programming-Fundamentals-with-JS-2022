function amazingNumbers(num) {
    let numToStr = String(num);
    let sum = 0;
    for (let i = 0; i < numToStr.length; i++) {
        let digit = Number(numToStr[i]);
        sum += digit;
    }
    let result = String(sum).includes("9");
    console.log(`${num} Amazing? ${result ? "True" : "False"}`);
}

amazingNumbers(1233);