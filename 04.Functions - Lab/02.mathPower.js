function mathPower(number, power) {
    let res = 1;
    for(let i = 0; i < power; i++) {
        res = res * number;
    }
    console.log(res);
}

mathPower(3,4);