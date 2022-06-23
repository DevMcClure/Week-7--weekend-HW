const birthYear = [1975, 1997, 2002, 1995, 1985];
//const ages = [];
// for(let counter = 0; counter < birthYear.length; counter++) {
//   let age = 2022 - birthYear[counter];
//   ages.push(age);
// }
const ages  =birthYear.map((year,index)=> {
    console.log("Value at Index",index," IS ", year)
    return 2022-year
})
// prints age results in array
console.log(ages);