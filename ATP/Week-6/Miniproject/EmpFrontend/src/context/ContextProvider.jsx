import React from 'react'
import { createContext,useState } from 'react'
export const counterContextObj=createContext();


function ContextProvider({children}) {
    const [counter,setCount]=useState(10);
    const changeCounter=()=>{
        setCount(counter+1)
    }
    const [counter1,setCount1]=useState(20);
    const changeCounter1=()=>{
        setCount1(counter1+1)
    }
  return (

        <counterContextObj.Provider value={{counter,counter1,changeCounter,changeCounter1}}>
          {children}
        </counterContextObj.Provider>
        
      
  )
}

export default ContextProvider
