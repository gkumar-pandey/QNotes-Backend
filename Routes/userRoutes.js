const express = require("express");
const userRouter = express.Router();
const { signUp, login } = require("../Controllers/userController");
userRouter.post("/signup", signUp);

userRouter.post("/signin", login);

module.exports = userRouter;
