//Scenario : You are preparing a course list for display on a website.

//Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];

/*
Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
    */
   let f=courses.filter(element=>element.length>5)
   console.log(f)
   let m=courses.map(element=>element.toLocaleUpperCase())
   console.log(m)
   let r=m.reduce((acc , ele)=> acc+"|"+ele)
   console.log('"'+r+'"')
   let s=courses.find(element=>element=="react")
   console.log('"'+s+'"')
   let i=courses.findIndex(element=>element=="node")
   console.log("Index of Node:",i)

   /*

   OutPut
PS C:\Users\dhara\JavaScript\Assignments\day3> node .\1Asginment2.js
[ 'javascript', 'mongodb', 'express' ]
[ 'JAVASCRIPT', 'REACT', 'NODE', 'MONGODB', 'EXPRESS' ]
"JAVASCRIPT|REACT|NODE|MONGODB|EXPRESS"
"react"
Index of Node: 2
   */