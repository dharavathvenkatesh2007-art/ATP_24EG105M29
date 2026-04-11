import React from 'react'
import { useContext } from 'react'
import { counterContextObj } from '../context/ContextProvider'
import { useCounterStore } from '../store/userCounterStore'
function Home() {
  //zustand
  const {newCounter,incrementCounter,decrementCounter,reset}=useCounterStore()
   //const {newCounter2,incrementCounter2}=useCounterStore()
   let newCounter2=useCounterStore((state)=>state.newCounter2)
   let incrementCounter2=useCounterStore((state)=>state.incrementCounter2)

  const {counter,changeCounter}=useContext(counterContextObj)
  const {counter1,changeCounter1}=useContext(counterContextObj)
  //console.log(result)
  return (
    <div>Home</div>
    /*
    <div>
      
      <h1 className='text-3xl'>Counter:{counter}</h1>
      <button onClick={changeCounter} className='bg-amber-300 p-5'>change</button>
      <h1 className='text-3xl'>Counter1:{counter1}</h1>
      <button onClick={changeCounter1} className='bg-amber-300 p-5'>change</button>
      <h1 className='text-3xl'>Counter-zustand:{newCounter}</h1>
      <button onClick={incrementCounter} className='bg-amber-300 p-5'>Increment</button>
      <button onClick={decrementCounter} className='bg-amber-300 p-5'>Decrement</button>
      <button onClick={reset} className='bg-amber-300 p-5'>Reset</button>
      <h1 className='text-3xl'>NewCounter:{newCounter2}</h1>
      <button onClick={incrementCounter2} className='bg-red-500 p-5'>Increment</button>

    </div>
   */ 

  )
}

export default Home