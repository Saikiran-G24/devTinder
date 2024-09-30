const express=require('express')
const app=express()


app.get("/user/:userId/:username/:password",(req,res)=>{
    console.log(req.params)
    res.send({firatname:"saikiran",lastname:"kudurupaka"})
})


app.listen(7777,()=>{
    console.log("server is successfully listening on port 7777.....")
})

