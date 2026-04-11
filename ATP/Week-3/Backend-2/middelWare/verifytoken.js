import jwt from 'jsonwebtoken'
const {verify}=jwt
export function verifyToken(req,res,next){
    console.log(req.cookies)
    const token=req.cookies?.Token
    console.log(token)
    //if req from unautohorized 
    if(!token){
        return res.status(401).json({message:"plese login"})
    }
    try{
        const decodedToken=verify(token,"abcdef")
        console.log(decodedToken)
        req.user=decodedToken
        next();
    }
    catch(err){
        res.status(401).json({message:"session expired Plese login again"})
    }

}