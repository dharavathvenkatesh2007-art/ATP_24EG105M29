import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div>
        <nav>
            <ul className='flex justify-end gap-5 p-3'>
                <li>
                    <NavLink className={({isActive})=>(isActive)?"text-blue-500 p-2 bg-blue-300":""} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>(isActive)?"text-blue-500 p-2 bg-blue-300":""} to="/createEmployee">CreateEmployee</NavLink>
                    
                </li>
                <li>
                    <NavLink className={({isActive})=>(isActive)?"text-blue-500 p-2 bg-blue-300":""} to="/listOfemployee">ListOfemployee</NavLink>
                </li>
            </ul>
        </nav>

      
    </div>
  )
}

export default Header
