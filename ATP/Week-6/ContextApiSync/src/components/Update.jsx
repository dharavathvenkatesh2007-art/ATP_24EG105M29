import React from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios'
import { use } from 'react';

function Update() {
  const {
      register,
      handleSubmit,
      formState: { errors },
      setValue
    } = useForm();
    //get employ object
    const {state}=useLocation()
    useEffect(()=>{
      setValue("name",state.name)
      setValue("email",state.email)
      setValue("mobile",state.mobile)
      setValue("designasation",state.designasation)
      setValue("companyName",state.companyName)

    },[]);

const navigate=useNavigate()
const saveModifiedEmp=async (Update)=>{
 // console.log(Update)
  //update function
  const res=await axios.put(`http://localhost:5000/employee/update/${state._id}`,Update)
  //console.log(res)
  if(res.status===200){
    //navigate to list of employes
    navigate('/listOfemployee')

  }

}
     

  return (
    <div>
      <h1 className="text-5xl text-center text-yellow-500">Edit Employee</h1>
      {/* form */}
      <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(saveModifiedEmp)} >
        <input
          type="text"
          placeholder="Enter name "
          {...register("name")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter Email "
          {...register("email")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designasation")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyName")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />

        <button type="submit" className="text-2xl rounded-2xl bg-green-600 text-white block mx-auto p-4">
          Save
        </button>
      </form>
    </div>
  )
}

export default Update
