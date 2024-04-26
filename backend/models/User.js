const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({

    username : {
        type : String,
        required : [true,"Please provide UserName"]
    },
    email : {
        type : String,
        required : [true,"Please provide email"],
        unique : true
    },  
    password : {
        type : String,
        required : [true,"Please provide Password"],
        minlength : 6
    },
    resetPasswordToken : String,
    resetPasswordExpire : Date
})


userSchema.pre('save',async function(next){

    if(!this.isModified('password')) next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();

})

userSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.getToken =  function(){
    return jwt.sign({id:this._id},"THIS IS",{expiresIn:'3d'})
}

userSchema.methods.getResetPasswordToken = function(){
    const resetToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.resetPasswordExpire = Date.now() + 15 * (60*1000);
    return resetToken;
}
const User = mongoose.model("User",userSchema);

module.exports = User;