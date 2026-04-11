import { useEffect, useState} from "react";

function ApiDemo(){
    let [users,setUsers]=useState([])
    let [loding,setLoding]=useState(false)
    let [err,setError]=useState(null)
    useEffect(()=>{
        async function getData() {
            setLoding(true)
            try{
                let res=await fetch("https://jsonplaceholder.typicode.com/comments")
                let usersList=await res.json();
                //update users list
                
                setUsers(usersList)
            }
            catch(err){
                console.log("err is",err)
                setError(err)
            }
            finally{
                setLoding(false)
            }
           
        } getData();
    },[])
    if(loding==true){
        return <p className="text-center">Loding...</p>
    }
    if(err!==null){
        return <p className='text-center'>{err.message}</p>
    }
    
    return(
        <div >
            <h1 className="text-center">List of Users</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 rounded-2xl shadow-2xl shadow-black">
                
                
                {users.map(each=>
                    <div className="grid text-center shadow-2xl shadow-black" key={each.id}>
                        <p>{each.name}</p>
                        <p>{each.email}</p>

                    </div>

                )
                
                }
            </div>
            
            
        </div>
    )
}
export default ApiDemo
