const express=require('express')
const app=express()
//request handler 
//This will match all http method APIs calls to /test
app.use("/",(req,res)=>{                    //This line over writes everything and There is no chance to execute other route paths. Now any other route doesn't work.
    res.send('hello from parent-file')
})

app.use("/test/result",(req,res)=>{
    res.send('successfully getting result from server')
})
//This only handle get calls to /test 
app.get("/user",(req,res)=>{
    res.send('Retriving the data from the server')
})

//This only handle post calls to /test 
app.post("/user",(req,res)=>{
    res.send('Creating the new resource on server')
})

//This only handle put calls to /test 
app.put("/user",(req,res)=>{
    res.send('updating the existing file on the server')
})

//This only handle delete calls to /test 
app.delete('/user',(req,res)=>{
res.send('Deleted user profile from the server successfully')
})

app.use("/xyz",(req,res)=>{
    res.send('server responding to the request-xyz')
})

app.listen(3000,()=>{
    console.log("server is successfully listening on port 3000.....")
})

