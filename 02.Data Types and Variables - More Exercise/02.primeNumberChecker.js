function primeNumberChecker(num) {
    for(let i = 1; i < num; i++) {
       if(num % 3 !== 0 && num % 2 !== 0 || num === 2 || num === 3) {
            console.log(true);
            break;
       } else {
        console.log(false);
        break;
       }
    }
}

primeNumberChecker(7);