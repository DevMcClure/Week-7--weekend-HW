const arr = [5, 7, 1, 8, 4];
const sum = arr.reduce(function(runningTotal, currentValue) {
    console.log("Value At",runningTotal,currentValue) 
    // console.log prints the process so you can see how its working.
  return runningTotal + currentValue;
});
// prints 25
console.log(sum);