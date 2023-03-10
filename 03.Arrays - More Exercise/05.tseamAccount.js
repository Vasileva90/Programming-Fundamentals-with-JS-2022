function tseamAccount(array) {
    let games = array[0].split(" ");

    for (let i = 1; i < array.length; i++) {
        let currentEl = array[i].split(" ");
        let command = currentEl[0];
        let newGame = currentEl[1];

        if (command === "Play!") {
            break;
        } else if (command === "Install") {
            let counter = 0;
            for (let i = 0; i < games.length; i++) {
                if (games[i] === newGame) {
                    counter++;
                    break;
                }
            }
            if (counter === 0) {
                games.push(newGame);
            }
        } else if (command === "Uninstall") {
            for (let i = 0; i < games.length; i++) {
                if (games[i] === newGame) {
                    games.splice(i, 1);
                    break;
                }
            }
        } else if (command === "Update") {
            for (let i = 0; i < games.length; i++) {
                if (games[i] === newGame) {
                    games.splice(i, 1);
                    games.push(newGame);
                    break;
                }
            }
        } else if (command === "Expansion") {
            let expansion = newGame.split("-");
            let game = expansion[0];
            for(let i = 0; i < games.length; i++) {
                if(games[i] === game) {
                    let expandedGame = expansion.join(":");
                    games.splice(i + 1, 0, expandedGame);
                    break;
                }
            }
        }
    }
    console.log(games.join(" "));
}

tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']);