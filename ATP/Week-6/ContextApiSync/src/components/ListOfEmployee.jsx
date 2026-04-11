import React from 'react'

import {NavLink, Outlet } from 'react-router'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

function ListOfEmployee() {
  const [emps, setEmps] = useState([]);
  const navigate=useNavigate([])
//get all employees
const gotoEmployee=((empObj)=>{
    navigate("/view",{state:empObj})

  })
  //update the employes
  const gotoUpdate=((empObj)=>{
    navigate("/update",{state:empObj})

  })
  //delete the employes
const gotodelete=async (id)=>{
  const res=await axios.delete(`http://localhost:5000/employee/delete/${id}`)
  if(res.status==200)
  {
    getEmps();
  }

}
async function getEmps() {
      let res = await fetch("http://localhost:5000/employee/list");
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      }
    }
  useEffect(() => {
    
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5  text-center ">
            <p>{empObj.email}</p>
            <p className='mb-4'>{empObj.name}</p>
            {/**<ul className='flex justify-center gap-5 p-3'>
                            <li>
                                <NavLink className={({isActive})=>(isActive)?"text-blue-500 p-2 bg-blue-300":""} to="view">View</NavLink>
                            </li>
                            <li>
                                <NavLink className={({isActive})=>(isActive)?"text-blue-500 p-2 bg-blue-300":""} to="Update">Update</NavLink>
                                
                            </li>
                            <li>
                                <NavLink className={({isActive})=>(isActive)?"text-blue-500 p-2 bg-blue-300":""} to="delete">Delete</NavLink>
                            </li>
             </ul>
 */}
           {/**3 buttons */}
           <div className='flex justify-center gap-5'>
             <button onClick={()=>gotoEmployee(empObj)} className='bg-green-600 p-2 rounded-2xl' >View</button>
             <button onClick={()=>gotoUpdate(empObj)} className='bg-yellow-600 p-2 rounded-2xl '>Edit</button>
             <button onClick={()=>gotodelete(empObj._id)} className='bg-red-600 p-2 rounded-2xl'>Delete</button>

           </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmployee
