/*Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
*/
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
/*
Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
    */
   let f=employees.filter(element=>element.department=="IT")
   console.log("Employees from IT department:",f)
   let m=employees.map(element=>
    {
        element.netSalary=element.salary+(element.salary/100)*10
        return element
    })
   console.log("After adding 10% of bonus",m)
   let r=employees.reduce((acc,element)=>acc+element.salary,0)
   console.log("calculate total salary payout",r)
let s=employees.find(element=>element.salary==30000)
console.log("employee with salary 30000",s)

let i=employees.findIndex(element=>element.name=="Neha")
console.log('Index of employee "Neha":',i)


/*

PS C:\Users\dhara\JavaScript\Assignments\day3> node .\Asginment3.js 
Employees from IT department: [
  { id: 201, name: 'Amit', salary: 45000, department: 'IT' },
  { id: 203, name: 'Rahul', salary: 75000, department: 'IT' }
]
After adding 10% of bonus [
  {
    id: 201,
    name: 'Amit',
    salary: 45000,
    department: 'IT',
    netSalary: 49500
  },
  {
    id: 202,
    name: 'Neha',
    salary: 60000,
    department: 'HR',
    netSalary: 66000
  },
  {
    id: 203,
    name: 'Rahul',
    salary: 75000,
    department: 'IT',
    netSalary: 82500
  },
  {
    id: 204,
    name: 'Pooja',
    salary: 30000,
    department: 'Sales',
    netSalary: 33000
  }
]
calculate total salary payout 210000
employee with salary 30000 {
  id: 204,
  name: 'Pooja',
  salary: 30000,
  department: 'Sales',
  netSalary: 33000
}
Index of employee "Neha": 1
 
 */