const express = require("express");
const UserRouter = express.Router()
const {UserModel} = require("./Model/userModel")
UserRouter.post("/posts",async(req,res)=>{
    try {
        let data = new UserModel(req.body)
        await data.save()
        res.status(200).json({"mssg":"Data posted Successfully"})
    } catch (error) {
        res.status(500).json({"mssg":error.message})
    }
})
UserRouter.get("/posts",async(req,res)=>{
    try {
        let data = await UserModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({"mssg":error.message})
    }
})
UserRouter.delete("/posts/:id",async(req,res)=>{
    let ids = req.params.id
   try {
    let data = await UserModel.findByIdAndDelete(ids)
    // res.status(200).json(data)
    res.status(200).json({"mssg":"Deleted Successfully"})
   } catch (error) {
    res.status(500).json({"mssg":error.message})
   }
})
module.exports={UserRouter}