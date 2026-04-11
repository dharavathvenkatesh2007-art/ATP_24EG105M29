
//5. Write a function that receives 3 number args and  return the big number 


function Big(a,b,c){
    if(a>b&&a>c){
    return console.log(`a:${a} is Bigger`)//prints a
}
else if(b>c)
{
    return console.log(`b:${b} is bigger`)//prints b
}
else{
    return console.log(`c:${c} is bigger`)
}
}
console.log(Big(20,15,35))
/*
OutPut
PS C:\Users\dhara\JavaScript\Assignments> node .\BigFun.js
c:35 is bigger  (returns big number)
undefined //returns undefined due to no return keyWord
*/