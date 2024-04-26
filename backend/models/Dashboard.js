const mongoose = require('mongoose');
const dashBoardSchema = new mongoose.Schema({
    
    moviename : {
        type : String,
        required : [true,"Please provide Movie name"]
    },
    desc: {
        type : String,
        required : [true,"Please provide Movie description"],
    },  
    poster: {
        type : String,
        required : [true,"Please provide Password"],
        unique: true
    },
    duration:{
        type: String,
        required : [true,"Please provide showTime"]
    },
    trailer:{
        type: String,
        required : [true,"Please provide trailer"]
    },
    showTime:{
        type: String,
        required : [true,"Please provide showTime"]
    }


})


module.exports = mongoose.model("dashBoard",dashBoardSchema);
