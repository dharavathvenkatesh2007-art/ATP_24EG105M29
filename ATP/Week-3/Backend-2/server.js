import exp from 'express'
import { connect } from 'mongoose'
import {userApp}  from './APIs/UserApi.js'
import { productApp } from './APIs/ProductApi.js'
import cookieParser from 'cookie-parser'
import { config } from 'dotenv'
config()
const app=exp()
app.use(exp.json())
const port=process.env.PORT
app.use(cookieParser())
app.use("/user-api",userApp)
app.use("/product-api",productApp)

//connect to DB server
async function connectDB() {
    try{
    await connect(process.env.DB_URL)
    console.log("DB Connected Successfully")
    app.listen(port,()=>console.log(`Server port number ${port}`))
    }
    catch(err){
        console.log("err in DB connection",err)
    }
    
}
connectDB()

//error handling middleware

//should be at last

//error=> {name,message(discription),callstack(total path whare error occured)}
app.use((err,req,res,next)=>{
    console.log(err.name)
    //validation error"
    if(err.name=='ValidationError'){
        return res.status(400).json({message:"Error occured",error:err.message})
    }
    //cast error"CastError//based on match"
    if(err.name=='CastError'){
        return res.status(400).json({message:"Error occured",error:err.message})
    }

    //server side error
    res.status(500).json({message:"Error Occured",error:err.message})

})

/*
connect("mongodb://localhost:2717")
.then(()=>{
    console.log("DB connected succesfull")
app.listen(4000,()=>console.log("Server port number 4000"))
}
)
.catch(()=>{message})
*/