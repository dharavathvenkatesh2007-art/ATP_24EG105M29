/**
 * 1.Exam portal simulator:
-----------------------------
When a student submits an exam:

        Immediately show: “Exam submitted successfully”
        After 2 seconds → show: “Evaluating answers…”
        After 4 seconds → show: “Result: Pass”

 */


console.log("Exam submeted Succesfully")
setTimeout(()=>
{ console.log("Evaluating answer")
},2000)
setTimeout(()=>
{ console.log("Result: Pass")
},4000)

/**
OutPut
PS C:\Users\dhara\JavaScript\Assignments\day4> node .\Exam.js
Exam submeted Succesfully
Evaluating answer
Result: Pass
 */