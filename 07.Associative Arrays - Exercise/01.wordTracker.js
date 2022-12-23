function wordTracker(data) {
    let map = new Map();
    let words = data.shift().split(" ");
    for(let word of words) {
        map.set(word, 0);
    }

    for(let word of data) {
        if(map.has(word)) {
            let oldValue = map.get(word);
            map.set(word, oldValue + 1);
        }
    }
    let sorted = Array.from(map);
    sorted.sort((a, b) => b[1] - a[1]);
    for(let [key,value] of sorted) {
       console.log(`${key} - ${value}`);
    }
    //---------------
    // let map = {};
    // let words = data.shift().split(" ");
    // for (let word of words) {
    //     map[word] = 0;
    // }
    // for (let word of data) {
    //     if (map.hasOwnProperty(word)) {
    //         let oldValue = map[word];
    //         map[word] = oldValue + 1;
    //     }
    // }
    // let sorted = Object.entries(map);
    // sorted.sort((a, b) => b[1] - a[1]);

    // for (let [key, value] of sorted) {
    //     console.log(`${key} - ${value}`);
    // }
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);