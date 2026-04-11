//create min-express app(Seperate route)
import exp from "express"
import { UserModal } from "../models/UserModel.js";
import jwt from 'jsonwebtoken'
import { compare, hash } from "bcryptjs";
import { config } from "dotenv";
config()
export const userApp=exp.Router()

import { verifyToken } from "../middelWare/verifytoken.js";
const {sign}=jwt
 
//user Lolgin
userApp.post("/auth",async(req,res)=>{
    //get user from body
    const {email,password}=req.body
    //verify email
    let mail=await UserModal.findOne({email:email})
    if(!mail){
        res.status(400).json({message:"Invalid Mail"})
    }
    //ccompare pasword
    let result=await compare(password,mail.password)
    if(!result){
        res.status(400).json({message:"Invalid password"})
    }
    //if pasword are matched
    //create token(jwtwebtoken)
   const signedToken= sign({email:mail.email},process.env.SECRET_KEY,{expiresIn:"1h"})
    //send token in res

    //res.status(200).json({message:"Login SuccesFull",payload:signedToken})

    //store token as http only coockie
    res.cookie("Token",signedToken,{
        httpOnly:true,
        sameSite:"lax",
        secure:false
    }
    )
    res.status(200).json({message:"Login SuccesFull",payload:mail})



})
  


//create user
userApp.post("/users",async(req ,res)=>{
    //get new user object
    
    const newUser=req.body;
    //hash pasword
const hashPasword=await hash(newUser.password,10)
//replace plane password with hash pasword
newUser.password=hashPasword
    //create new user document 
    const newUserDocument= new UserModal(newUser)
    
    const result=await newUserDocument.save()
    console.log("result",result)

    res.status(201).json({message:"User Created"})
})
//read user

userApp.get("/users",verifyToken,async(req,res)=>{
    //get users from document
   let userdList=await UserModal.find().populate("cart.product")
   //if No users
   if(!userdList)
  {
   return res.status(404).json({message:"No Users"})
  }
   res.status(200).json({message:"Users details",payload:userdList})
})
//read usetr by object id
userApp.get("/user",verifyToken,async(req,res)=>{

    //read user email id
    const emailOfUser=req.user?.email
    console.log(emailOfUser)
    const uid=req.params.id
    //find user by id
  const userObj=await UserModal.findOne({email:emailOfUser}).populate("cart.product")
  //IF USER NOT FOUND
  if(!userObj)
  {
   return res.status(404).json({message:"User Not Found"})
  }
  res.status(200).json({message:"User data",payload:userObj})
})
//update users by id
userApp.put("/users/:id",verifyToken, async(req,res)=>{
    //get modefied  user
    const modifiedUser=req.body
    const uid=req.params.id
//hash the updated pasword
const hashPasword=await hash(modifiedUser.password,10)
modifiedUser.password=hashPasword
    //find user id & update user

  const UpdatedUser=await  UserModal.findByIdAndUpdate(uid,
                                                       {$set:{...modifiedUser}},
                                                       {new:true,runValidators:true})
    //send res
    res.status(200).json({message:"User Updated",payload:UpdatedUser})
})
userApp.delete("/users/:id",async(req,res)=>
{   //get user id
    const uid=req.params.id
    //delete user id
    const UserDelet=await UserModal.findByIdAndDelete(uid)
   if(!UserDelet){
    return res.status(404).json({message:"User not Found"})
   }
    res.status(200).json({message:"User Deleted",payload:UserDelet})
})

//app.Use(middleware)
//userapp.get(path,verifiToken,req-Handler)//rout level middlewares

//add product to user cart
/*
userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
    //get product id from url
    let productid=req.params.pid;
    //get user details to add
    const emailOfUser=req.user?.email
    //user is invalid
  let result=await UserModal.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productid}}})
  if(!result){
 return res.status(404).json({message:"User Not Found"})
  }
  res.status(200).json({message:"Product added succesfully"})

})
  */
userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
    //get product id from url
    let productid=req.params.pid;
    //get user details to add
    const emailOfUser=req.user?.email
    //user is invalid
  let result=await UserModal.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productid}}})
  if(!result){
 return res.status(404).json({message:"User Not Found"})
  }
  if(result.cart.find(``)
  ==UserModal.cart.product.productId){
    UserModal.cart.count++
  }
  res.status(200).json({message:"Product added succesfully"})

})

