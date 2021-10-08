let number1=Math.floor(Math.random() * 1000)+100;
let number2=Math.floor(Math.random() * 1000)+100;
let number3=Math.floor(Math.random() * 1000)+100;
let number4=Math.floor(Math.random() * 1000)+100;
let number5=Math.floor(Math.random() * 1000)+100;
if(number1>number2 && number1>number3 && number1>number4 && number1>number5){
    console.log("Max"+number1);
}else if(number2>number1 && number2>number3 && number2>number4 && number2>number5){
    console.log("Max"+number2);
}else if(number3>number1 && number3>number2 && number3>number4 && number3>number5){
    console.log("Max"+number3);
}else if(number4>number1 && number4>number2 && number4>number3 && number4>number5){
    console.log("Max"+number4);
}else if(number5>number1 && number5>number2 && number5>number3 && number5>number4){
    console.log("Max"+number5);
}else if(number1<number2 && number1<number3 && number1<number4 && number1<number5){
    console.log("Min"+number1);
}else if(number2<number1 && number2<number3 && number2<number4 && number2<number5){
    console.log("Min"+number2);
}else if(number3<number1 && number3<number2 && number3<number4 && number3<number5){
    console.log("Min"+number3);
}else if(number4<number1 && number4<number2 && number4<number3 && number4<number5){
    console.log("Min"+number4);
}else {
    console.log("Min"+number5);
}
