const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth, (req, res, next) => {
  console.log("All admin routes...");
  // res.send("it will takecare of all the admin routes****");
  next();
});
app.get("/admin/deletedata", (req, res, next) => {
  res.send("deleting the admin data from server..");
}),
  app.post("/admin/getData", (req, res, next) => {
    console.log("getting the admin data");
    res.send("getting the admin data");
  }),
  app.post("/user", userAuth, (req, res, next) => {
    res.send("sending user data to server....");
  }),
  app.get("/user/login", (req, res, next) => {
    res.send("server is responding to your login request......");
  });
app.listen(7777, () => {
  console.log("server is successfully listening on port 7777.....");
});
