const express = require("express");
const app = express();
const {connection} = require("./Config/db")
const {UserRouter} = require("./UserRoute")
const cors = require("cors")
app.use(express.json())
app.use(cors())
app.get("/",async(req,res)=>{
    try {
        res.send({"mssg":"Welcome to Backend of Mock-11"})
    } catch (error) {
        res.send(error.message)
    }
})
app.use("/api", UserRouter)
app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log(error.message);
    }
    console.log(`Server is running at PORT : ${process.env.PORT}`);
})

