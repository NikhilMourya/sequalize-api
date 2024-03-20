const express = require("express");
const app = express();
const user = require("./db/models/user");
//regsiter dotenv for environemnt and process.cwd() will return >> current working dirctory path
require("dotenv").config({ path: `${process.cwd()}/.env` });
const port = process.env.APP_PORT || 3001;

//auth routes register
const authRouter = require("./routes/auth-route");
app.use("/api/auth", authRouter);
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});



app.get("/", (req, res) => {
  res.status(200);
  res.send("API running");
});

app.post("/user", async(req, res) => {
  console.log(req.body, "req",user);
  const newUSer = await user.create(req.body);
    console.log(newUSer);
  // try {
  //   const newUSer = await user.create(req.body);
  //   console.log(newUSer);
  //   return res.json({
  //     statusCode: 200,
  //     message: "created",
  //   });
  // } catch(error) {
  //   return res.status(400).json({
  //       statusCode: 400,
  //       message: error,
  //     });
  // }
});

//next is a middleware
app.use("*", (req, res, next) => {
  res.status(404).json({
    responseCode: 404,
    message: "Invalid Request",
  });
});

app.listen(port, () => {
  console.log("server started and listening on port: " + port);
});
