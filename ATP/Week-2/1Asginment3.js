//Scenario : You receive marks from an exam system.

//Test data:
const marks = [78, 92, 35, 88, 40, 67];
/*
Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
    */

    let f=marks.filter((element)=>element>35)
console.log("Pass marks:",f)
let m=marks.map(element=>element+5)
console.log("Grace marks +5 :",m)
let big=marks.reduce((accumulator,element)=>
    {
        if(accumulator>element)
        element=accumulator
        return element
    }
    )
console.log("Highest Marks:",big)
let s=marks.find(element=>element<40)
console.log("Marks Bellow 40:",s)
let i=marks.findIndex(element=>element==92)
console.log("Index of Marks 92 is :",i)
/*
OutPut
Pass marks: [ 78, 92, 88, 40, 67 ]
Grace marks +5 : [ 83, 97, 40, 93, 45, 72 ]
Highest Marks: 92
Marks Bellow 40: 35
Index of Marks 92 is : 1
*/