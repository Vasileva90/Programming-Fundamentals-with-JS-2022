function addAndRemove(array) {
    let newArray = [];
    let num = 0;

    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        num++;
        if (command === "add") {
            newArray.push(num);
        } else if (command === "remove") {
            newArray.pop(num);
        }
    }
    if (newArray.length === 0) {
        console.log("Empty");
    } else {
        console.log(newArray.join(" "));
    }
}

addAndRemove(['remove', 'remove', 'remove']);