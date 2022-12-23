function carWash(array) {
    let cleanedCar = 0;
    let result = carIsCleaned(array);

    function carIsCleaned(array) {
        for (let command of array) {
            switch (command) {
                case "soap": cleanedCar += 10; break;
                case "water": cleanedCar += cleanedCar * 0.20; break;
                case "vacuum cleaner": cleanedCar += cleanedCar * 0.25; break;
                case "mud": cleanedCar -= cleanedCar * 0.10; break;
            }
        }
        return cleanedCar;
    }
    console.log(`The car is ${result.toFixed(2)}% clean.`);
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);