const express=require('express')
const app=express()
//request handler
app.use("/",(req,res)=>{
    res.send('hello from parent-file')
})
app.use("/test/result",(req,res)=>{
    res.send('successfully getting result from server')
})
app.use("/hello",(req,res)=>{
    res.send('server responding to the request')
})
app.listen(3000,()=>{
    console.log("server is successfully listening on port 3000.....")
})

