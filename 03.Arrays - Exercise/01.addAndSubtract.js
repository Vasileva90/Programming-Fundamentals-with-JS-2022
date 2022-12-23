function addAndSubtract(arr) {
    let newArr = [];
    let sumArr = 0;
    let sumNewArr = 0;
    for(let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        sumArr += currentNum;
        if(currentNum % 2 === 0) {
            currentNum += i;
        } else {
            currentNum -= i;
        }
        newArr.push(currentNum);
        sumNewArr += currentNum;
    }
    console.log(newArr);
    console.log(sumArr);
    console.log(sumNewArr);
}

addAndSubtract([-5, 11, 3, 0, 2]);