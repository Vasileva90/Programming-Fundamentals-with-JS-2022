function triangleArea(firstNum, secondNum, thirdNum) {
    let s = (firstNum + secondNum + thirdNum) / 2;
    let area = Math.sqrt(s * (s - firstNum) * (s - secondNum) * (s - thirdNum));
    console.log(area);
}

triangleArea(2,
    3.5,
    4);