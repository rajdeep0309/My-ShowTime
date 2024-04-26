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
    // resetPasswordToken : String,
    // resetPasswordExpire : Date
})

const Person = mongoose.model("Person",userSchema); 
module.exports = Person;