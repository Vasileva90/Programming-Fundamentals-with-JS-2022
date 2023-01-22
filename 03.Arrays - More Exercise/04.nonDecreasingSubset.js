function nonDecreasingSubset(array) {
    let newArray = [];
    let max = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < array.length; i++) {
        if(array[i] >= max) {
           max = array[i];
           newArray.push(array[i]);
        }
    }
    console.log(newArray.join(" "));
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);