const express = require("express");
const app = express();
const {adminAuth,userAuth}=require('./middlewares/auth')
app.use("/admin", adminAuth);
app.use("/user",userAuth);


app.use("/admin/getdata", (req, res, next) => {
  console.log("admin data sent");
  res.send("admin data sent");
});
app.get('/user/login',(req,res)=>{
  console.log('user logined')
res.send('user logined')
})
app.get("/user/data",userAuth, (req, res, next) => {
  console.log("user data sent*********");
  res.send("user data sent");
});
app.post("/admin/deletedata", (req, res) => {
  console.log("deleted user data1");
  res.send("deleted user data1");
});

app.listen(7777, () => {
  console.log("server is successfully listening on port 7777.....");
});
