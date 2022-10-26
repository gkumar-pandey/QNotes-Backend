const express = require("express");
const connectDB = require("./Config/db");
const cors = require("cors");
const app = express();
const noteRoute = require("./Routes/noteRoutes.js");
const userRouter = require("./Routes/userRoutes.js");
require("dotenv").config();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/user", userRouter);
app.use("/note", noteRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port : ${PORT}`);
});
