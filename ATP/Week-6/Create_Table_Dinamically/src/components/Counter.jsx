import { useState } from 'react'
function Counter(){
    //state
    console.log(`Counter componant`)
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1)
    }
    const Decrement=()=>{
        setCount(count-1)
    }
    const reset=(value)=>{
        setCount(count=value)
    }

    return(
        <div className='text-center px-6 py-3 m-10'>
            <h1>Count:{count}</h1>
            <button className='p-2 bg-green-600' onClick={increment}>+</button>
            <button className='p-2 bg-red-500' onClick={Decrement}>-</button>
             <button className='p-2 bg-blue-500' onClick={()=>reset(0)}>--</button>

        </div>
    )


}
export default Counter