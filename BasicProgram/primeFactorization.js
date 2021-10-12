const ps = require("prompt-sync");

const prompt = ps();

let num = prompt("enter the number u want to find prime factorization = ");

let arr = new Array();

 function getPrimefactor() {

for(let i=2;i<num;i++){
    while(num%i==0){
        arr.push(i);
        num=num/i;
    }
}
if(num>=2){
   arr.push(num);
}
console.log(arr);
}
getPrimefactor();