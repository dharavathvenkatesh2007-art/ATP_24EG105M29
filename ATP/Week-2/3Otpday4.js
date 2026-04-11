/**
 2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends
 */


console.log("Otp Sent Successfully")
let seconds=10;

let intrvelId=setInterval(()=>{
    seconds--
    console.log(`Otp can send in ${seconds}`)
    if(seconds==0)
    {console.log("Resend Otp")
        clearInterval(intrvelId)
    }
},1000)


/**
 PS C:\Users\dhara\JavaScript\Assignments\day4> node .\Otp.js
Otp Sent Successfully
Otp can send in 9
Otp can send in 8
Otp can send in 7
Otp can send in 6
Otp can send in 5
Otp can send in 4
Otp can send in 3
Otp can send in 2
Otp can send in 1
Otp can send in 0
Resend Otp
 
 */