import React from 'react'
import Header from './Header'
import Fotter from './Fotter'
import { Outlet } from 'react-router'

function RootComponants() {
  return (
     <div>
      <Header/>

      <div className='min-h-screen mx-16 bg-gray-100'>
        <Outlet/>

      </div>
      <Fotter/>
      
    </div>
  )
}

export default RootComponants
