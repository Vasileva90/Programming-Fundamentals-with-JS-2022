function gladiatorInventory(input) {
    let inventory = input.shift().split(" ");

    for(let i = 0; i < input.length; i++) {
        let commands = input[i].split(" ");

        if(commands[0] === "Buy") {
           if(!inventory.includes(commands[1])) {
               inventory.push(commands[1]);
           }
        } else if(commands[0] === "Trash") {
            if(inventory.includes(commands[1])) {
                let index = inventory.indexOf(commands[1]);
                inventory.splice(index, 1);
            }
        } else if(commands[0] === "Repair") {
            if(inventory.includes(commands[1])) {
                let index = inventory.includes(commands[1]);
                inventory.splice(index,1);
                inventory.push(commands[1]);
            }
        } else if(commands[0] === "Upgrade") {
            let upgardeElement = commands[1].split("-")
            if(inventory.includes(upgardeElement[0])) {
                let index = inventory.indexOf(upgardeElement[0]);
                inventory.splice(index + 1, 0, `${upgardeElement[0]}:${upgardeElement[1]}`);
            }
        }
    }
    console.log(inventory.join(" "));
}

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']);