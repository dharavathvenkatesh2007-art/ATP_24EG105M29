import exp, { json } from 'express'
import { userApp } from './APIs/UserApi.js'
import { productApp } from './APIs/ProductApi.js'
const app=exp()
//use body parser middlower
app.use(exp.json())

//Create custom middleware
function middleware1(req,res,next){

//send res from middleware
   //res.json({message:'This is a res middleware'})
//send request to next
console.log("this is next of middleware1 ")
next()

}
//Create custom middleware

//**********  Appplication Level middleWres */
function middleware2(req,res,next){


//send res from middleware
 //res.json({message:'This is a res middleware 2'})
//send request to next
console.log("this is next of middleware2")
next()

}
//use custom middleware
app.use(middleware1)
app.use(middleware2)
//forward request to userApi if path starts with /user-api

app.use('/user-api',userApp)

//forward request to userApi if path starts with /product-api

app.use('/product-api',productApp)

//port number
const port=2306
//asgine port number to HTTP servlet
app.listen(port,()=>console.log(`server listining po port ${port} ...`))
 

