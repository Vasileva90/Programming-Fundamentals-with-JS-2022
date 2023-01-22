function rotateArray(array) {
    let rotation = array[array.length - 1];
    array.pop();

    for (let i = 0; i < rotation; i++) {
        let currentNum = array.pop();
        array.unshift(currentNum);
    }
    console.log(array.join(" "));
}

rotateArray(['1', '2', '3', '4', '2']);