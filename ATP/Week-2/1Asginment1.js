//Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];
/*
Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
    */

    //1. filter() temperatures above 35
let f=temperatures.filter((element)=>element>35)
console.log("Temperature above 35:",f)

//2. map() to convert all temperatures from Celsius → Fahrenheit
let m=temperatures.map(element=>element*(9/5)+32)
console.log("Temperature from from Celsius → Fahrenheit:",m)

//3. reduce() to calculate average temperature
let r=temperatures.reduce((Acc,element)=>(Acc+element))
r=r/temperatures.length
console.log("Average temperature",r)

//4. find() first temperature above 40
let s=temperatures.find(element=>element>40)
console.log("Element Above 40:",s)


//5. findIndex() of temperature 28
let i=temperatures.findIndex(element=>element==28)
console.log("Index of temperature 28 is :",i)

/*

PS C:\Users\dhara\JavaScript\Assignments\day3> node .\1Asginment1.js
Temperature above 35: [ 40, 38, 42 ]
Temperature from from Celsius → Fahrenheit: [ 89.6, 95, 82.4, 104, 100.4, 86, 107.60000000000001 ]
Average temperature 35
Element Above 40: 42
Index of temperature 28 is : 2
*/