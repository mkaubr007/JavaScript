const ps = require("prompt-sync");
const prompt=ps();

let arr = new Array();
let size=prompt("enter the length of an array = ");

function addArray() {

    for(let i=0; i<size ; i++) {

        let num = prompt("enter the number u want to add in array = ");
        arr[i]=num;
    }
    console.log(arr);
}

function findTriplets(arr,size){
    let found =false;
    for(let i=0; i<size; i++){
        for(let j=i+1; j<size; j++){
            for(let k=j+1; k<size; k++){
                if(arr[i]+arr[j]+arr[k]==0){                   
                    found=true;
                    console.log(arr[i]+" "+arr[j]+" "+arr[k]);
                    console.log(found);
                }
            }
        }
    }
    if(found==false){
        console.log("No Triplets found")
    }
}
addArray();

findTriplets(arr,size);