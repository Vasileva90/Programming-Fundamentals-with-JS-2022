function sortAnArrayBy2Criteria(array) {

    let sortedArr = array.sort((a, b) => {
       return a.length - b.length || a.localeCompare(b);
});

    //console.log(sortedArr.join("\n"));

    sortedArr.forEach(element => {
        console.log(element);
    });
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);