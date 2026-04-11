import { useForm} from "react-hook-form";

function FormDemo(){

    const{register//to register
        ,handleSubmit//to submit
        ,formState:{errors}//to validate
    }=useForm()
    const onSubmit=(obj)=>{
        console.log(obj)
    }
 
    return(
        <div>
            <h1 className="text-center">Form Demo</h1>
            {/* form*/}
            <form action="" className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 ">

                    <label htmlFor="username">UserName</label>
                    <input type="text" {...register("username",{
                                         required: "Username Required",
                                        // minLength:4,
                                        validate:(v)=>v.trim().length!=0 || "White space is not valid"
                                        })}
                                          id="username" className="border w-full p-3 " />
            
                    {
                        errors.username?.type=="required" && <p className="text-red-500">{errors.username.message}</p>
                    }
                    {
                        errors.username?.type=="validate" && <p className="text-red-500">{errors.username.message}</p>
                    }
                    

                    <label htmlFor="email">Email</label>
                    <input type="text" {...register("email")}  id="" className="border w-full p-3 "/>
                    <button type="submit" className="bg-amber-600 text-2xl block mx-auto" >Submit</button>


                </div>

            </form>

        </div>
    )
}
export default FormDemo