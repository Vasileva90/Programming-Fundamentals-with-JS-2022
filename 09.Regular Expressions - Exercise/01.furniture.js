function furniture(input) {
    // let pattern = new RegExp(">>(?<furniture>[\\w]+)<<(?<price>[\\d]+[.]?[\\d]+)!(?<quantity>[\\d]+)");
    // let command = input.shift();
    // let furniture = [];
    // let currMoney = 0;
    // let totalMoney = 0;
    // let quantity = 0;
    
    // while(command !== "Purchase") {
    //     let match = pattern.exec(command);
    //     if(match !== null) {
    //         furniture.push(match.groups["furniture"]);
    //         currMoney = Number(match.groups["price"]);
    //         quantity = Number(match.groups["quantity"]);
    //         totalMoney += currMoney * quantity;
    //     }
    //     command = input.shift();
    // }
    // console.log("Bought furniture:");
    // if(furniture.length > 0) {
    //     console.log(furniture.join("\n"));
    // }
    // console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
    //-----------------------------------
    let totalSum = 0;
    console.log("Bought furniture:");
    for(let line of input) {
        if(line === "Purchase") {
            break;
        }
        let regex = />>(?<name>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/g;
        let result = regex.exec(line);
        if(result !== null) {
            totalSum += Number(result.groups.price) * Number(result.groups.quantity);
            console.log(result.groups.name);
        }
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
);