function printAndSum(startNum, endNum) {
    let printLine = "";
    let sum = 0

    for(let i = startNum; i <= endNum; i++) {
        printLine += `${i} `;
        sum += i;
    }
    console.log(printLine);
    console.log(`Sum: ${sum}`);
}

printAndSum(5,10);