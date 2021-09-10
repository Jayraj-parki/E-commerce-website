const express=require('express')
require('dotenv').config({path:"./config.env"})
const PORT=process.env.PORT ||5000
// const cookieparser=require("cookie-parser")
const app=express()
require("./db/conn")

app.use(express.json())
// app.use(cookieparser())
 
app.use(require('./router/routes'))
if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"))
}
app.listen(PORT,()=>{
    console.log("listening at "+PORT)
}) 
