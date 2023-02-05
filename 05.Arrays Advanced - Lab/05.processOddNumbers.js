function processOddNumbers(numbers) {
    let result = numbers
                .filter((el, i) => i % 2 === 1)
                .map(x => x * 2)
                .reverse()
                .join(" ");

    console.log(result);
}
processOddNumbers([10, 15, 20, 25]);

/*function processOddNumbers(numbers) {
    let filterredNumbers = numbers.filter((el,i) => i % 2 === 1);
    let doubledNumbers = filterredNumbers.map(x => x * 2);
    let reversedNumbers = doubledNumbers.reverse();
   
    console.log(reversedNumbers.join(" "));
}
processOddNumbers([10, 15, 20, 25]);*/


/*let result = [];
for(let i = 0; i < numbers.length; i++) {
    if(i % 2 === 1) {
     let currNum = numbers[i];
       result.push(currNum);
    }
}
console.log(result.map(x => x * 2).reverse().join(" "));
}
processOddNumbers([10, 15, 20, 25]);*/