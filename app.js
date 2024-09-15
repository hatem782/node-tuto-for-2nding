const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UserRoutes = require("./routes/User.routes");
const PostRoutes = require("./routes/Post.routes");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "HELLO ISAMM",
      version: "1.0.0",
      description: "A simple Express Library API",
    },
  },
  apis: ["./routes/*.js"], // files containing documentation annotations
};

const specs = swaggerJsdoc(options);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));

app.use(bodyParser.json());

app.use("/user", UserRoutes);
app.use("/post", PostRoutes);

app.listen(3000, () => {
  console.log("server is running");
  mongoose
    .connect(
      "mongodb+srv://hatem782:gkZsvxzJa33uXgDh@cluster0.gkngm.mongodb.net/ISAMM"
    )
    .then(() => console.log("database connected!"));
});

//mongodb+srv://hatem782:gkZsvxzJa33uXgDh@cluster0.gkngm.mongodb.net/adc
