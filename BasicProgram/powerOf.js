let power = 1;
		
const ps = require("prompt-sync");

const prompt=ps();

let limit = prompt("Enter the limit : ");

    for(let i= 1; i<= limit; i++){
        console.log('2^' + i + ' = ' + power);
        power = (2 * power) ;
    }