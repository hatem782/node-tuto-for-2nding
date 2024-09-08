const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UserRoutes = require("./routes/User.routes");

app.use(bodyParser.json());

app.use("/user", UserRoutes);

app.listen(3000, () => {
  console.log("server is running");
  mongoose
    .connect(
      "mongodb+srv://hatem782:gkZsvxzJa33uXgDh@cluster0.gkngm.mongodb.net/ISAMM"
    )
    .then(() => console.log("database connected!"));
});

//mongodb+srv://hatem782:gkZsvxzJa33uXgDh@cluster0.gkngm.mongodb.net/adc
