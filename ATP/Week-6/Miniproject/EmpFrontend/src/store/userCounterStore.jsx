import {create} from 'zustand'

export const useCounterStore=create((set)=>({
    //state
    newCounter:0,
    newCounter2:100,
    //add user state (name,age)
    user:{name:"Venkat",email:"Venkat@gmail.com",age:21},
    //function to change the email
    changeEmail:()=>set({...user,email:"Venkatesh@gmail.com"}),
    //function to  change the name and age
    changeNameAge:()=>set({...user,name:"Venkatesh",agr:20}),




    //function
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    incrementCounter2:()=>set(state=>({newCounter2:state.newCounter2+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0}),
    //function to change newcount by 500
    change:()=>set({newCounter:500})
    //function to decrement new count by 20

    //change the mail
    
}))