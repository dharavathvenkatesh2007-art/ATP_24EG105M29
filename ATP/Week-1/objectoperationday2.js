const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
/*



1.Insert new Emp at 2nd position
2.Remove an emp with name "Kiran"
3.Change the last mark 95 to 75 of emp  "Sneha"
*/


//1.Insert new Emp at 2nd position
employees.splice(2,0,{eno: 106,
                     name:"venkat",
                    marks:[90,95,85]})

                    console.log("Add employee at index 2",employees)

let index=-1;
for(let i in employees){
    if(employees.name=="Kiran")
    {
        index=i
    }
}
employees.splice(index-1,1)


// 2.Remove an emp with name "Kiran"
console.log("Deleted Employee with name:kiran",employees)
let ind;
for(let i of employees){
    if(i.name=="Sneha")
    {
        ind=i
    }
}


//3.Change the last mark 95 to 75 of emp  "Sneha"


ind.marks.pop()
ind.marks.push(75)
console.log("Sneha After changing marks:",ind)



/*
OutPut

PS C:\Users\dhara\JavaScript\Assignments\day2> node .\1.js
Add employee at index 2 [
  { eno: 101, name: 'Ravi', marks: [ 78, 82, 91 ] },
  { eno: 102, name: 'Bhanu', marks: [ 65, 70, 68 ] },
  { eno: 106, name: 'venkat', marks: [ 90, 95, 85 ] },
  { eno: 103, name: 'Sneha', marks: [ 88, 92, 95 ] },
  { eno: 104, name: 'Kiran', marks: [ 55, 60, 58 ] },
  { eno: 105, name: 'Anitha', marks: [ 90, 85, 87 ] }
]
Deleted Employee with name:kiran [
  { eno: 101, name: 'Ravi', marks: [ 78, 82, 91 ] },
  { eno: 102, name: 'Bhanu', marks: [ 65, 70, 68 ] },
  { eno: 106, name: 'venkat', marks: [ 90, 95, 85 ] },
  { eno: 103, name: 'Sneha', marks: [ 88, 92, 95 ] },
  { eno: 105, name: 'Anitha', marks: [ 90, 85, 87 ] }
]
Sneha After changing marks: { eno: 103, name: 'Sneha', marks: [ 88, 92, 75 ] }
*/