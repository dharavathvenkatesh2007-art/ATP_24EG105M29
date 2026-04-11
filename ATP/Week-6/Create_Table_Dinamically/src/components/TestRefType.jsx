import { useState } from "react";
function TestRefTypes(){
    //state
    const[user,setUser]=useState({username:"venkat", age:20, city:"hyd"})
    const[marks,setMarks]=useState([10,20,30])
    // update user state
    const updateUser=()=>{
        setUser({...user,username:"venkatesh"})
    };
    //update marks
    const updadeMarks=()=>{
        setMarks([...marks,40])
    };
return(
    <div>
<p>username {user.username}</p>
<p>age {user.age}</p>
<p>city {user.city}</p>
<button className=" text-3xl bg-amber-600" onClick={updateUser}>updateUser</button>
 {(marks.map((mark)=>{
    <p className="text-3xl" key={mark}>marks</p>
    
}))}
<button className=" text-3xl bg-amber-600" onClick={updadeMarks}>updatemarks</button>  
    </div>
)
}
export default TestRefTypes