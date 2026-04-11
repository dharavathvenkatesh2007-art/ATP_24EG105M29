import exp from 'express'
export const userApp=exp.Router()

let user=[]

//create API{REST(Representational S/tate Transfer) API}
//clint(http://localhost:2306/users)
//Route to handle Get request
userApp.get('/users',(req,res)=>{
    //send responce
   // res.json({message:"This res for get users request"})
   //read all users
   res.json({message:'All users',payload:user})
})
//Route to handle post request
userApp.post('/users',(req,res)=>{
    //Send responde to clint
   // res.json({message:"This responce for create user"})
   //get user from clint
   //push user
   //send res
   //console.log(req.body)
 const newUser=req.body
 user.push(newUser)
 res.json({message:"user Created"})
})
//route to handle put request
userApp.put("/users",(req,res)=>{
    //update user
   // res.json({message:"Update user data"})
   //get Modified user data
   let modifiedUser=req.body
   //get index of user in existing data
   let index=user.findIndex(userobj=>userobj.id==modifiedUser.id)
   //update user
   if(index==-1){
    return res.json({message:"User not found"})
   }
   user.splice(index,1,modifiedUser)
   //send responce
   res.json({message:"User Modified"})

})
//route to handle delete 
userApp.delete("/users/:id",(req,res)=>{
    //delete user data
   // res.json({message:"Delete user hello"})
   //get id
   let IdofUrl=Number(req.params.id) //{id:5}
   //find index
   let index=user.findIndex(userId=>userId.id==IdofUrl)
   if(index==-1){
    res.json({message:"Not found"})
   }
   user.splice(index,1)
   res.json({message:"user deleted"})
   //delete
})
userApp.get('/users/:id',(req,res)=>{
    //get id of petuclar user
    let IdofUrl=Number(req.params.id)
    //find index
    //let index=user.findIndex(usId=>usId.id==IdofUrl)
    /*if(index==-1){
        res.json({message:"user not found"})
    }*/
    //response
    let findUser=user.find(Uid=>Uid.id==IdofUrl)
    if(findUser==undefined){
        res.json({message:'Not Found'})
    }
    res.json({message:"user found",payload:findUser})
})

