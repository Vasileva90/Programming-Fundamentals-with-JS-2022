function mergeArrays(array1, array2) {
    let newArr = [];
    for(let i = 0; i < array1.length; i++) {
        if(i % 2 === 0) {
            newArr[i] = Number(array1[i]) + Number(array2[i]);
        } else {
            newArr[i] = array1[i] + array2[i];
        }
    }
    console.log(newArr.join(" - "));
}

mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']);