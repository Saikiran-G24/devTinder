const express = require("express");
const app = express();
app.use(
  "/user",
  [(req, res, next) => {
    console.log("request handler 1........");
    next();
  },
  (req, res, next) => {
    // res.send("request handler 2");
    console.log("response 2........");
    next();
  },
  (req, res, next) => {
    // console.log("response 3........");
    next();
  },
  (req, res, next) => {
    console.log("response 4........");
    res.send('request handler 4')
    
  }]
);
app.listen(7777, () => {
  console.log("server is successfully listening on port 7777.....");
});
