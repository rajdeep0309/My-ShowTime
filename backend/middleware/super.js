const jwt = require('jsonwebtoken');
const Super = require('../models/Super');

exports.protect = async (req,res,next)=>{
    
    const token = req.header('auth-token');
    if(!token){
        return res.status(401).send({
            success : false,
            error : "Not authorized to access this route"
        })
    }
    else{
        try{
            const decoded = jwt.verify(token,"SUPER@ IS")
            /* decoded - will have { id: '60ec551462ab12163cf2bc20', iat: 1626142215, exp: 1626143115 } */
            const user = await Super.findById(decoded.id)
            if(!user){
                res.status(404).send({
                    success : false,
                    error : "No user found"
                })
            }
            req.user = user;
            next();
        }catch(err){
            return res.status(401).send({
                success : false,
                error : "Not authorized for this route"
            })
        }
    }
}