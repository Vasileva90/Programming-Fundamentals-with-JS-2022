function oddAndEvenSum(num) {
    let number = num.toString();
    let evenSum = 0;
    let oddSum = 0;
    
    for (let el of number) {
        let currentNum = Number(el);
       if(currentNum % 2 === 0) {
          evenSum += currentNum;
       } else {
        oddSum += currentNum;
       }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);