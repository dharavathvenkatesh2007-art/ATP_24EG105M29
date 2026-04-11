import { Schema,model } from "mongoose";
const productSchema=new Schema({
    productId:{
        type:Number,
        required:[true,"Id is required for product"]
    },
    productName:{
        type:String,
        required:[true,"Name is required for product"]

    },
    price:{
        type:Number,
        required:[true,"Price is Required"],
        min:[10000,"Minimum price should be above 10000"],
        max:[50000,"Maximum price should be bellow 50000 "]
    },
    brand:{
        type:String,
        required:[true,"brand is required"]
    }
    
},{versionKey:false,
    timestamps:true
})

export const ProductModel=model("product",productSchema)