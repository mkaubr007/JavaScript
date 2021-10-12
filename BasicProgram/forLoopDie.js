var randomno = []

function dieRoll() {
for(i=0;i<5;i++){
    
   randomno.push( Math.floor((Math.random() * 6) + 1));
}
console.log(randomno);
}
dieRoll();