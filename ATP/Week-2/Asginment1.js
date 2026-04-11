//You are building a shopping cart summary for an e-commerce website.

//Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
/*
Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"
    */
   let f=cart.filter((element)=>element.inStock==true)
   console.log("only inStock products:",f)
let Arr=[]
   let m=Arr.map(element=>{
    cart.name="Phone"
    cart.totalPrice=14500
    return element
   })
   console.log("create a new array with:  { name, totalPrice }",m)
   
let r=cart.reduce((acc,element ) => acc+element.price,0)
console.log("calculate grand total cart value:",r)
let s=cart.find(element=>element.name=="Mouse")
console.log("Details of 'Mouse':",s)
let i=cart.findIndex(element=>element.name=="Keyboard")
console.log('The position of "Keyboard":',i)
/*
PS C:\Users\dhara\JavaScript\day3> node .\Asginment1.js
only inStock products: [
  { id: 101, name: 'Laptop', price: 60000, quantity: 1, inStock: true },
  { id: 102, name: 'Mouse', price: 800, quantity: 2, inStock: true },
  {
    id: 104,
    name: 'Monitor',
    price: 12000,
    quantity: 1,
    inStock: true
  }
]
create a new array with:  { name, totalPrice } []
calculate grand total cart value: 74300
Details of 'Mouse': { id: 102, name: 'Mouse', price: 800, quantity: 2, inStock: true }
The position of "Keyboard": 2
*/