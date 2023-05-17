const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 first_name : {
  type:String,
  require:true
 },
last_name : {
   type:String,
  require:true
},
email : {
   type:String,
  require:true
},
password :{
  type:String,
  require:true
},
});

module.exports = mongoose.model("user", userSchema);