

// this outputs to console
function myDisplayer(some){
    console.log(some)
}

// Add 2 numbers
function myCalculator(num1, num2, myCallback){
    let sum = num1 + num2;
    myCallback(sum)
    return sum;
}

let result = myCalculator(5, 5, myDisplayer);