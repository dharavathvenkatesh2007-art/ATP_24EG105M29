import { useState } from "react";
import { useForm } from "react-hook-form";

function Handson(){
    const [user,setUser]=useState([])

    const{
        register,
        handleSubmit,
        formState:{errors}
        }=useForm()
    const onSubmit=(obj)=>{
        console.log(obj)
        setUser([...user,obj])
    }
    console.log(user)
    return(
       <div >
           <div className=" block mx-auto w-150 h-100" >
            <h2 className="text-center ">Create User Form</h2>
            <form className="max-w-md mx-auto b-10" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="firstName" >firstName</label>
                    <input type="text"  {...register("firstName",{
                                         required: "Firstname Required",
                                        // minLength:4,
                                        validate:(v)=>v.trim().length!=0 || "White space is not valid"
                                        })}id="firstName" className="border w-full p-3"/>
                                        {
                        errors.firstName?.type=="required" && <p className="text-red-500">{errors.firstName.message}</p>
                    }
                    {
                        errors.firstName?.type=="validate" && <p className="text-red-500">{errors.firstName.message}</p>
                    }
                    <label htmlFor="email">email</label>
                    <input type="text" {...register("email",{
                                         required: "email Required",
                                        // minLength:4,
                                        validate:(v)=>v.trim().length!=0 || "White space is not valid"
                                        })}
                                     
                     id="email" className="border w-full p-3"/>
                    <label htmlFor="dateOfBirth">dateOfBirth</label>
                    <input type="date" {...register("dateOfBirth",{
                                         required: "Date of Birth Required",
                                        })} id="dateOfBirth" className="border w-full p-3"/>
                </div>
                <div className="gap-20">
                    <button className="bg-pink-600 block mx-auto m-20 ">Add User</button>
                </div>
            </form>
           </div>
           <div className="bg-red-600 mx-auto w-160 h-80">
            <h1 className="text-center">List of Users</h1>
            <table className="mx-auto gap-2">
                <thead>
                    <tr>
                        <td>Firstname</td>
                        <td>email</td>
                        <td>dateOfBirth</td>
                    </tr>
                </thead>
                <tbody>
                    {user.map((userObj, index) => (
                    <tr key={index}>
                        <td>{userObj.firstName}</td>
                        <td>{userObj.email}</td>
                        <td>{userObj.dateOfBirth}</td>
                    </tr>
          ))}
                </tbody>
            </table>

           </div>
       </div>
    )

    }

export default Handson