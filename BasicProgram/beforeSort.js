let array=[];                
for(let i=0;i<10;i++){
    array[i]=Math.floor(Math.random()*900)+99;
}
console.log(array);
for(let i=0;i<10;i++)         
{
    let temp;
    for(let j=i+1; j<10 ;j++)
    {
        if(array[i]<array[j])
        {
            temp=array[i];
            array[i]=array[j];
            array[j]=temp;
        }
    }
}
console.log(array[array.length-2]);  

console.log(array[1]); 