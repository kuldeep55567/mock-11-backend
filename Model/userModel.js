const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
name:String,
email:String,
destination:{
    type:String,
    enum:["India","Africa","Europe","America"]
},
travellers:Number,
budget:Number
},{
    versionKey:false
})
const UserModel = mongoose.model("User",userSchema)
module.exports={
    UserModel
}