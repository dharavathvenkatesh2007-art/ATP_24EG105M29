
/*7. Write a function that receives an array & search element as args and 
returns the index of that search element in the array. It should return 
 "not found" when search element not found.
*/
function search(m,marks){

for(let i=0;i<marks.length;i++)
{
   if(marks[i]==m){
      return i
   }              
}
return 0
}
let i=search(60,[20,100,50,59,5,60])
if(i!=0)
{
   console.log("search element is found at index :",i)
}
else{
   console.log("Not found")
}
/*
OutPut
PS C:\Users\dhara\JavaScript\Assignments> node .\SearchFun.js
search element is found at index : 5
*/