const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateUser = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    // console.log(token);
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, process.env.SECRET_KEY);
      //   console.log(user);
      req.userId = user.id;
      //   next();
    } else {
      res.status(401).json({ message: "Unauthorized user" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized user" });
  }
};

module.exports = authenticateUser;
