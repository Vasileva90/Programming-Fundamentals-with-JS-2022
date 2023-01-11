function binaryToDecimal(num) {
    num = num.split("");
    let decimal = 0;
    let power = num.length - 1;
    for(let i = 0; i < num.length; i++) {
        decimal += Number(num[i] * Math.pow(2, power));
        power--;
    }
    console.log(decimal);
}

binaryToDecimal("00001001");
binaryToDecimal("11110000");