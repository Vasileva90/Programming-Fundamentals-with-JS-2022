function signCheck(numOne, numTwo, numThree) {
   let res = numOne * numTwo * numThree;
   if(res > 0) {
      console.log("Positive");
   } else {
      console.log("Negative");
   }
}

signCheck(5,
    12,
   -15);