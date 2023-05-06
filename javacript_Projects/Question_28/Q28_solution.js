const prompt = require('prompt-sync')();

let x= prompt("Please enter number");

//print triangle pattern
let triangle_pattern="";
for(let j=1;j<=x;j++)
{
    for(let k=1;k<=j;k++)
    {
       // console.log("*"+"\t");
       triangle_pattern+="* ";
    }
    triangle_pattern+="\n";
}

console.log(triangle_pattern);

// print sqaure pattern
let square_pattern="";
for(let m=1;m<=x;m++)
{
    for(let n=1;n<=x;n++)
    {
        square_pattern+="* ";
    }
    square_pattern+="\n";
}
console.log(square_pattern);


// print pyramid pattern
let pyramid_pattern="";
for(let a=1;a<=x;a++)
{
    for(let d=1;d<=x-a;d++)
    {
        pyramid_pattern+=" ";
    }
    
    for(let b=1;b<=a;b++)
    {
        pyramid_pattern+="* ";
    }
    pyramid_pattern+=" "
    pyramid_pattern+="\n";
}
console.log(pyramid_pattern);