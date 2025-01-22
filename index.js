let inputNumbers= prompt(`add numbers seperated by commas`)
console.log(inputNumbers)

let stats= inputNumbers.split(`,`)
console.log(stats)

console.log(stats.length)

let sum = 0;
for (let i=0; i<stats.length; i++){
  sum += stats[+i];
}
console.log(sum);