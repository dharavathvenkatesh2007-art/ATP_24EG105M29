
//4. Find the smallest element in marks array


let marks=[50,78,5,98]
let min=marks[0]
for(let i=0;i<marks.length;i++)
{
if(marks[i]<min)
{
    min=marks[i]
}

}
console.log(`The Minim Marks in array is:${min}`)