const express=require('express')
const app=express()


app.get(/a/,(req,res)=>{
    res.send({firatname:"saikiran",lastname:"kudurupaka"})
})

app.listen(3000,()=>{
    console.log("server is successfully listening on port 3000.....")
})

