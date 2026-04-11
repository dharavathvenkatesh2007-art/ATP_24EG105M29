
//6. Write a function that receives an array as arg and return their sum


let marks=function(m){
    let sum=0;
for(let i=0;i<m.length;i++)
{
    sum+=m[i]

}
console.log(`sum of marks is:`)
return sum
}
let s=marks([90,80,60,40]);
console.log(s)
/*
OutPut
PS C:\Users\dhara\JavaScript\Assignments> node .\SumFun.js
sum of marks is:
270
*/