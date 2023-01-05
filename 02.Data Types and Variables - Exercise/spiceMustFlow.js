function spiceMustFlow(startingYield) {
    let daysMineOperated = 0;
    let totalAmount = 0;
    while (startingYield >= 100) {
        daysMineOperated++;
        totalAmount += (startingYield - 26);
        startingYield -= 10;
    }
    if (totalAmount !== 0) {
        totalAmount -= 26;
    }
    console.log(daysMineOperated);
    console.log(totalAmount);
}

spiceMustFlow(111);