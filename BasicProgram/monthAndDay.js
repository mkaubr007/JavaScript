const ps = require("prompt-sync");
const prompt=ps();

let month = prompt("Plz enter month = ");

const date = prompt(" Plz enter Date = ");

if((month < 6)  &&  (month > 3)  &&  (date < 20)){
    console.log("date = " +(month + "-" +date));
    console.log("True");
}
else{
    console.log("date = " +(month + "-" + date));
    console.log("False");
}