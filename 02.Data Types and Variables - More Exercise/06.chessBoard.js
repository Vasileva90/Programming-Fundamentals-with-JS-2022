function chessBoard(n) {
    let size = Number(n);
    let currentColour = "black";
    let previousColour = "";
    console.log(`<div class="chessboard">`);

    for(let i = 1; i <= size; i++) {
        console.log(`  <div>`);
        for(let j = 1; j <= size; j++) {
            console.log(`    <span class="${currentColour}"></span>`);

            previousColour = currentColour;
            currentColour = previousColour === "black" ? "white" : "black";
        }
        console.log(`  </div>`);
        if(size % 2 === 0) {
            previousColour = currentColour;
            currentColour = previousColour === "black" ? "white" : "black";
        }
    }
    console.log(`</div>`);
}

chessBoard(3);