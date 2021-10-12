const ps = require("prompt-sync");

const prompt = ps();
let a = prompt("Enter First Number = ");
console.log(`${a}`);
let b = prompt("Enter Second Number = ");
console.log(`${b}`);
let c = prompt("Enter Third Number = ");
console.log(`${c}`);
let min,max;

let result1 = (a + (b * c));
let result2 = (a % b) + c;
let result3 = c + (a / b);
let result4 = (a * b) + c;
if(result1 < result2 && result1 < result3 && result1 < result4){
    min = result1;
}
else if(result2 < result1 && result2 < result3 && result2 < result4){
    min = result2;
}
else if(result3 < result1 && result3 < result2 && result3 < result4){
    min = result3;
}
else{
    min = result4;
}

console.log(`Minimum of Results = ` + min);

if(result1 > result2 && result1 > result3 && result1 > result4){
    max = result1;
}
else if(result2 > result1 && result2 > result3 && result2 > result4){
    max = result2;
}
else if(result3 > result1 && result3 > result2 && result3 > result4){
    max = result3;
}
else{
    max = result4;
}

console.log(`Maximum of Results = ` + max);