import React from 'react'
import { NavLink, Outlet } from 'react-router'
import Java from './java'
import Vite from './Vite'
import NodeJs from './NodeJs'

function Technologys() {
  return (
    <div>
      <nav>
        
        <ul className='flex justify-center gap-5'>
                <li>
                    <NavLink className={({isActive})=>(isActive)?"text-blue-500 p-0.5 bg-blue-300":""} to="java">Java</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>(isActive)?"text-blue-500 p-0.5 bg-blue-300":""} to="nodejs">NodeJS</NavLink>
                    
                </li>
                <li>
                    <NavLink className={({isActive})=>(isActive)?"text-blue-500 p-0.5 bg-blue-300":""} to="vite">Vite</NavLink>
                </li>
                
            </ul>
            <Outlet/>
      </nav>
    </div>
  )
}

export default Technologys
