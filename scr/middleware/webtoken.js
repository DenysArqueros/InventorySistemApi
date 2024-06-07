
import jwt from "jsonwebtoken";
const secretKey = "123"
function createJwt(req,res,next) {
    const {name,apellido} = req.body; 
    const token = jwt.sign({name},secretKey,{expiresIn:'1h'})
    next();
    return res.status(200).json({token: token})
}

function verifyJwt(req,res,next) {
   const header = req.header("Authorization") || "";
   const token = header.split(" ")[1]

   if(!token){
    return res.status(401).json({error: 'Token no proporcionado'})
   }

   jwt.verify(token,secretKey,(err)=>{
    if(err){
        return res.status(403).json({error: err});
    }
    next();
   })

   
}



export {createJwt,verifyJwt};