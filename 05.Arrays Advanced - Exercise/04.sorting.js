function sorting(array) {
    let result = [];
    arr = array.sort((a, b) => a - b);
    while (arr.length !== 0) {
        result.push(arr[arr.length - 1]) && arr.pop();
        result.push(arr[0]) && arr.shift();
    }
    console.log(result.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);