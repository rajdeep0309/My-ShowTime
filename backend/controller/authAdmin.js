const Admin = require('../models/Admin');
exports.login = async (req,res,next) => {
    const {email,password} = req.body;
    /* check if both email and password are given */
    if(!email || !password){
        return res.status(400).send({
            success : false,
            error : "Please provide both email and password"
        })
        
    }
    try{
        /* Check if user exists in Database */ 
        const user = await Admin.findOne({email})

        if(!user){
            return res.status(404).send({
                success : false,
                error  :  "Invalid Credentials"
            })
        }
        /* Check if entered password matched with the password in DB */
        const isMatch = await user.matchPassword(password);

        if(!isMatch){
            return res.status(400).send({
                success : false,
                error  :  "Invalid Credentials"
            })
        }
        /* If matches generate Token */
        const token = user.getToken()
        return res.status(200).json({
            success : true,
            token
        })
    }catch(error){
        res.status(500).send(error)
    }
}