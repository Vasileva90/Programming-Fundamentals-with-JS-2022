function thePyramidOfKingDjoser(base, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let row = 0;
    let currentBase = base;

    while (currentBase > 2) {
        let currMarbel = currentBase * 4 - 4;
        let currStone = currentBase * currentBase - currMarbel;
        totalStone += currStone;

        row++;
        if (row % 5 === 0) {
            totalLapis += currMarbel;
        } else {
            totalMarble += currMarbel;
        }
        currentBase -= 2;
    }
    row++;
    let gold = currentBase * currentBase;

    let stone = Math.ceil(totalStone * increment);
    let marble = Math.ceil(totalMarble * increment);
    let lapis = Math.ceil(totalLapis * increment);
    totalGold = Math.ceil(gold * increment);
    let totalHeight = Math.floor(row * increment);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalGold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
}

thePyramidOfKingDjoser(11, 1);