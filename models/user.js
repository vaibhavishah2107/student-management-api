const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: [true,"Username is required"],
        minlength:5
    },
    email:{
        required: [true,"email is required"],
        type:String,
        lowercase:true,
        unique:true
    },
    password:{
        required: [true,"password is required"],
        type:String,
        minlength:8
    }
});
const User = mongoose.model("User", userSchema);
module.exports = User;