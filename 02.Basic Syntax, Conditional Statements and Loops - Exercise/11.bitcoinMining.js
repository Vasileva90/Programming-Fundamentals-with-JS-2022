function bitcoinMining(input) {
    let countBitcoins = 0;
    let day = 0;
    let goldPrice = 67.51;
    let bitcoinPrice = 11949.16;
    let totalMoney = 0;
    let firstBitcoinDay = 0;
    let boughtBitcoin = 0;
    let sumBitcoins = 0;

    for (let i = 0; i <= input.length - 1; i++) {
        let goldQuantity = input[i];
        day++;
        if (day % 3 === 0) {
            goldQuantity *= 0.70;
        }
        let money = goldQuantity * goldPrice;
        totalMoney += money;
        if (totalMoney >= bitcoinPrice) {
            countBitcoins++;
            boughtBitcoin = Math.floor(totalMoney / bitcoinPrice);
            totalMoney = totalMoney - (bitcoinPrice * boughtBitcoin);
            sumBitcoins += boughtBitcoin;
        }
        if (countBitcoins === 1) {
            firstBitcoinDay = day;
        }
    }
    console.log(`Bought bitcoins: ${sumBitcoins}`);
    if (firstBitcoinDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);