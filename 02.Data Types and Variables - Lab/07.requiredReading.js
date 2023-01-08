function requiredReading(numberOfPages, pagesRead1Hour, numberOfDays) {
    let totalTime = numberOfPages / pagesRead1Hour;
    let requiredHours = totalTime / numberOfDays;
    console.log(requiredHours);
}

requiredReading(432,
    15 ,
    4);