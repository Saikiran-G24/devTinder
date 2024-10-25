const express = require("express");
const app = express();
app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong");
  }
});
app.get("/getUserData", (req, res) => {
  // try {
  //Logic of DB call and get user data
    throw new error("dfghjkl");
    res.send("error thrown");
  // } catch (err) {
  //   res.status(404).send("404 error");
  // }
});
app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong");
  }
});

app.listen(7777, () => {
  console.log("server is successfully listening on port 7777.....");
});
