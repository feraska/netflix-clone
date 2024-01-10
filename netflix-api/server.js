const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const userRoutes = require("./routes/userRoutes")
const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connected successfull")
}).catch((err)=>{
    console.log(err)
})
app.use("/api/user",userRoutes)
app.listen(process.env.PORT,()=> {
    console.log(`server started in port ${process.env.PORT}`)
})