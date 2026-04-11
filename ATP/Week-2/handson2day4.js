/*Hands-On 2: Deep Copy (Isolation & Safety Use Case)
---------------------------------------------------

Given Data:*/
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
/*
Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged
            */

let Corder=structuredClone(order)
Corder.customer.address.city ="Telangana"
Corder.items[0].price=5000
console.log(order)
console.log(Corder)

//Hear original order doesnot changed but copied order changed and object within object propersis also changed


/**
 PS C:\Users\dhara\JavaScript\Assignments\day4> node .\handson2.js
{
  orderId: 'ORD1001',
  customer: { name: 'Anita', address: { city: 'Hyderabad', pincode: 500085 } },
  items: [ { product: 'Laptop', price: 70000 } ]
}
{
  orderId: 'ORD1001',
  customer: { name: 'Anita', address: { city: 'Telangana', pincode: 500085 } },
  items: [ { product: 'Laptop', price: 5000 } ]
}
 */