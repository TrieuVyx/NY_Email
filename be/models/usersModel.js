const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    max: 30,
    // required: true,
    default: "",
    unique: true
  },
  phone: {
    type: String,
    default: "",
    // required: true,
    unique: true
  },
  email: {
    type: String,
    default: "",
    // required: true,
    unique: true
  },
  password:{
    type:String,
    default: ""
  },
  codeComfirm:{
    type: String,
    default: ""
  }
  
});

const User = mongoose.model("Users", userSchema);
module.exports = User;