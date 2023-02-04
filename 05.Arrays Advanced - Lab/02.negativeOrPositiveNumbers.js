function negativeOrPositiveNumbers(array) {
    let result = [];
    for(let el of array) {
        let currNum = Number(el)
        if(currNum >= 0) {
           result.push(currNum);
        } else {
            result.unshift(currNum);
        }
    }
    console.log(result.join("\n"));
}

negativeOrPositiveNumbers(['3', '-2', '0', '-1']);