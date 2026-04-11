/*Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
*/
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
/*
Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"
   */
  let f=students.filter(element=>element.marks>=40)
  console.log("students who passed (marks ≥ 40):",f)
  let m=students.map(element=>{
    if(element.marks>=90) {
        element.grade="A"
        return element
    }
    if(element.marks>=75){
        element.grade="B"
        return element
    }
    if(element.marks>=60){
        element.grade="C"
    return element}
    if(element.marks<60){
        element.grade="D"
    return element}

  })
  console.log("Add grades based on marks:",m)
let r=students.reduce((acc,element)=>acc+element.marks,0)
r=r/students.length
console.log("calculate average marks:",r)
let s=students.find(element=>element.marks==92)
console.log("student who scored 92",s)
let i=students.findIndex(element=>element.name=="Kiran")
console.log('Index of student "Kiran:"',i)

/*PS C:\Users\dhara\JavaScript\day3> node .\Asginment2.js
students who passed (marks ≥ 40): [
  { id: 1, name: 'Ravi', marks: 78 },
  { id: 2, name: 'Anjali', marks: 92 },
  { id: 4, name: 'Sneha', marks: 88 },
  { id: 5, name: 'Arjun', marks: 40 }
]
Add grades based on marks: [
  { id: 1, name: 'Ravi', marks: 78, grade: 'B' },
  { id: 2, name: 'Anjali', marks: 92, grade: 'A' },
  { id: 3, name: 'Kiran', marks: 35, grade: 'D' },
  { id: 4, name: 'Sneha', marks: 88, grade: 'B' },
  { id: 5, name: 'Arjun', marks: 40, grade: 'D' }
]
calculate average marks: 66.6
student who scored 92 { id: 2, name: 'Anjali', marks: 92, grade: 'A' }
Index of student "Kiran:" 2
*/