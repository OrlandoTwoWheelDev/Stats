let inputNumbers= prompt(`add numbers seperated by commas`)
console.log(inputNumbers)

let stats= inputNumbers.split(`,`)
console.log(stats)

console.log(stats.length)

// function getAverage(stats){
// let sum = 0;
// for (let i=0; i<stats.length; i++){
//   sum += stats[+i];
// }
// return sum / stats.length
// }
// console.log(sum(stats));  // 01,2,3,4,5


//  function sum(stats){
//   return stats.reduce(function (a,b){
//     return a + b; 
//   }, 0);
//  }

//  let numbers = [stats]
//  console.log(sum(numbers)); //// 01,2,3,4,5


// let numbers = [stats];
// let totalSum = numbers.reduce(function(a,b){return a+b;},0);
// console.log(totalSum); // 01,2,3,4,5


// const sum= (stats) => stats.reduce((total, val) => total + val);
// console.log(sum)


// let sum = stats
// for(i=0; i<stats.length; i++){
//   sum += [i]
// }
// console.log(sum)

