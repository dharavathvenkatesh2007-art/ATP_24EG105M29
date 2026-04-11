import exp from 'express'
export const productApp=exp.Router()

//create products API eith bellow operations
let product=[]
 //create new product
 productApp.post('/product',(req,res)=>{
    let NewProduct=req.body
    product.push(NewProduct)
    res.json({message:"New Product Added",payload:NewProduct})

 })
 //read all products
 productApp.get('/product',(req,res)=>{
    res.json({message:"Product Details",payload:product})
 })
   
 //read all products by branch
 productApp.get('/product/:id',(req,res)=>{
    //get id of petuclar user
    let IdofUrl=Number(req.params.id)
    //find index
    //response
    let findUser=product.find(Uid=>Uid.id==IdofUrl)
    if(findUser==undefined){
        res.json({message:'Not Found'})
    }
    res.json({message:"user found",payload:findUser})
})

 //update a product
 productApp.put("/product",(req,res)=>{

   //get Modified user data
   let modifiedUser=req.body
   //get index of user in existing data
   let index=product.findIndex(userobj=>userobj.id==modifiedUser.id)
   //update user
   if(index==-1){
     res.json({message:"User not found"})
   }
   product.splice(index,1,modifiedUser)
   //send responce
   res.json({message:"User Modified"})

})
 //delete a product
 productApp.delete("/product/:id",(req,res)=>{
    //delete user data
   // res.json({message:"Delete user hello"})
   //get id
   let IdofUrl=Number(req.params.id) //{id:5}
   //find index
   let index=product.findIndex(userId=>product.id==IdofUrl)
   if(index==-1){
   return res.json({message:"Not found"})
   }
   user.splice(index,1)
   res.json({message:"Product deleted"})
   //delete
})