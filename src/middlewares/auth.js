const adminAuth = (req, res, next) => {
  console.log("handle all methods of admin");
  const token = "xyz";
  const  adminAuth= token === "xyz";
  if (!adminAuth) {
    res.send("handled all admin users...");
  } else {
    next();
  }
};
const userAuth = (req, res, next) => {
    console.log("user data sent......");
    const token = "xyz";
    const userAuth = token === "xyz";
    if (!userAuth) {
      res.status(401).send("handles all user data.........");
    } else {
      next();
    }
  };
module.exports={adminAuth,userAuth}
