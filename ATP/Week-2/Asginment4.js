/*Bank Transaction Analyzer

You are building a bank statement summary.

Test data:*/
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

/*
Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000
    */
   let f=transactions.filter(element=>element.type=="credit")
   console.log("All creadit Transactions:",f)
   let m=transactions.map(element=>element.amount)
   console.log("extract only transaction amounts",m)
   let r=transactions.reduce((acc,element)=>{
    let cr=0
    if(element.type=="credit"){
      for(let i in transactions){
         cr+=element.amount}

    
      return cr
    }
    let de=0
    if(element.type=="debit"){
      for(let i in transactions){
         de+=element.amount}
       return de
}
    element=cr-de
  return (acc+element,0)
   })
   console.log("calculate final account balance:",r)
   let s=transactions.find(element=>element.type=="debit")
   console.log("the first debit transaction:",s)
   let i=transactions.findIndex(element=>element.amount==10000)
   console.log("index of transaction with amount 10000:",i)


   
   /*
    PS C:\Users\dhara\JavaScript\Assignments\day3> node .\Asginment4.js
All creadit Transactions: [
  { id: 1, type: 'credit', amount: 5000 },
  { id: 3, type: 'credit', amount: 10000 }
]
extract only transaction amounts [ 5000, 2000, 10000, 3000 ]
calculate final account balance: 12000
the first debit transaction: { id: 2, type: 'debit', amount: 2000 }
index of transaction with amount 10000: 2
    */