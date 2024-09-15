const express = require("express");
const routes = express.Router();
const UserController = require("../controllers/User.controller.js");

routes.post("/create", UserController.CreateUser);
routes.get("/show", UserController.ShowUsers);
routes.get("/show-one/:id", UserController.GetOneUser);
routes.delete("/delete/:id", UserController.DeleteUser);
routes.put("/update/:id", UserController.UpdateUser);

module.exports = routes;
