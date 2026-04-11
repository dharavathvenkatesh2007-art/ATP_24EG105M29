import React from 'react'
import { useLocation } from 'react-router'

function View() {
  const {state}=useLocation()
  return (
    <div className='border-2 p-1 grid justify-center '>
      <h1 className='text-center'>View</h1>  
      <p>Name:{state.name}</p> 
      <p>Email:{state.email}</p> 
      <p>Mobil:{state.mobile}</p>  
      <p>Designasation:{state.designasation}</p> 
      <p>Company Name:{state.companyName}</p>  
        
    </div>
  )
}

export default View
