function simpleCalculator(numOne, numTwo, operator) {
    let res;
    switch (operator) {
        case "multiply": res = (numOne, numTwo) => numOne * numTwo; break;
        case "divide": res = (numOne, numTwo) => numOne / numTwo; break;
        case "add": res = (numOne, numTwo) => numOne + numTwo; break;
        case "subtract": res = (numOne, numTwo) => numOne - numTwo; break;
    }
    console.log(res(numOne,numTwo));
}

simpleCalculator(5, 5, 'multiply');




    /*let res;
    let multiply = (x, y) => x * y;
    let divide = (x, y) => x / y;
    let add = (x, y) => x + y;
    let subtract = (x, y) => x - y;

    switch (operator) {
        case "multiply": res = multiply(numOne, numTwo); break;
        case "divide": res = divide(numOne, numTwo); break;
        case "add": res = add(numOne, numTwo); break;
        case "subtract": res = subtract(numOne, numTwo); break;
    }
    console.log(res);
    }

simpleCalculator(5, 5, 'multiply');*/



    
    /*switch (operator) {
        case "multiply": multiply(numOne, numTwo); break;
        case "divide": divide(numOne,numTwo); break;
        case "add": add(numOne, numTwo); break;
        case "subtract": subtract(numOne, numTwo); break;
    }

    function multiply(a, b) {
        let res = a * b;
        console.log(res);
    }

    function divide(a, b) {
        let res = a / b;
        console.log(res);
    }

    function add(a, b) {
        let res = a + b;
        console.log(res);
    }

    function subtract(a, b) {
        let res = a - b;
        console.log(res);
    }
}

simpleCalculator(5, 5, 'multiply');*/