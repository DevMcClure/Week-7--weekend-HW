

// // console.log('sayHello with no arguments:', sayHello('dev', 'hi'));


// // function sayHello(name = 'World', greeting){
// //     return `Hello ${greeting} ${name}!`;
// // }



// // var add = function(firstNumber, secondNumber){
// //     return firstNumber + secondNumber;
// // }    

// // console.log('1+3 with add:', add(1,3));



// function total(numbers){
//     var total = 0;
//     for (var number of numbers){
//         total += number;
//     }
//     return total;
// }

// var sum = total([5, 8, 9, 11]);
// console.log('total of numbers added together:', sum)





// var objectHasKey = function(object,searchString){
//     for(var key in object){
//         if(searchString === key){
//             return true;
//         }
//     }
//     return false;
// }

// var person = {
//     name: 'Wojtek',
//     age: '30'
// };

// var keyIsFound = objectHasKey(person, 'name');
// var keyNotFound = objectHasKey(person, 'email');

// console.log('keyIsFound - should be true:', keyIsFound);
// console.log('keyNotFound - shoud be false', keyNotFound)



var multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

console.log('multiply 2 * 5', multiply(2,5));



