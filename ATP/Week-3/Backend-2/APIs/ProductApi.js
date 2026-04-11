import exp from 'express'
import { ProductModel } from '../models/ProductModel.js'
export const productApp=exp.Router()

let product=[]
//Add Product
productApp.post("/product",async(req,res)=>{
    //get data from body
    const newproduct=req.body
    //add data to database
    const newProduct=new ProductModel(newproduct)
    const result=await newProduct.save()
    //add to araay
    product.push(result)
    res.status(200).json({message:"product added",payload:result})

})
//read product
productApp.get("/product",async(req,res)=>
{
    //read all product
    const productList=await ProductModel.find()
    //if no products
    if(!productList){
        return res.json({message:"No Products"})
    }
    res.status(200).json({message:"Products list",payload:productList})
})
//read product by productId
productApp.get("/product/:id",async(req,res)=>{
    //get productId from server
    /*const pid=Number(req.params.id)*/
    const pid=req.params.id
    //find product by product in array and compare it with it
    //const ProductWithId=await ProductModel.findOne(product.find(uid=>uid.productId==pid))
    const ProductWithId=await ProductModel.findById(pid)
    //if no product
    if(!ProductWithId){
        res.status(404).json({message:"product not Found"})
    }
    res.status(200).json({message:"Product With Id",payload:ProductWithId})
})
//Update by product id
productApp.put("/product/:id",async(req,res)=>{
//get product id
const pid=req.params.id
//get data from body
const Pdata=req.body
//compare and update
/*
const index=product.findIndex(i=>i.productId==pid)
if(index==-1){
    res.status(404).json({message:"Product not Found"})
}
    */
const UpdateProduct=await ProductModel.findByIdAndUpdate(pid,
                                                  {$set:{...Pdata}},
                                                  { new:true,runValidators:true }
                                                )

res.status(200).json({message:"User Updated",payload:UpdateProduct})

})

productApp.delete("/product/:id",async(req,res)=>
{   //get user id
    const uid=req.params.id
    //delete user id
    const ProductDelet=await ProductModel.findByIdAndDelete(uid)
   if(!ProductDelet){
    return res.status(404).json({message:"Product not Found"})
   }
    res.status(200).json({message:"Product Deleted",payload:ProductDelet})
})


