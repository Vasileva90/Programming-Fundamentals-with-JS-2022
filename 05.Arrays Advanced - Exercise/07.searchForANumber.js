function searchForANumber(array, input) {
    let numberToTakeFromArr = input[0];
    let deleteNumbersFromArr = input[1];
    let searchedNumber = input[2];

    let newArray = array.splice(0,numberToTakeFromArr);
    newArray = newArray.splice(deleteNumbersFromArr);
    
    let counter = 0;
    for(let number of newArray) {
        if(searchedNumber === number) {
            counter++;
        }
    }
    console.log(`Number ${searchedNumber} occurs ${counter} times.`)
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);