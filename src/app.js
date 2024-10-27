const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");

app.use('/',(err,req,res,next)=>{
  console.log('1....')
  res.status(500).send('something went wrong........')
})
app.use("/user/getUserData",(req,res,next)=>{
  throw new error('oijhgfedrftg')

})
app.use('/',(err,req,res,next)=>{
  console.log('2....')
  res.status(500).send('something went wrong........')
})
// app.use("/user",(req,res,next)=>{
//   console.log('1....')
//   try {
//     throw new error('got an error in your code ')
//   } catch (error) {
//     res.status(401).send("request resouse is unauthorised....")
//   }
  
// })

app.listen(7777, () => {
  console.log("server is successfully listening on port 7777.....");
});
