const express = require("express");
const routes = express.Router();
const UserController = require("../controllers/User.controller.js");

routes.post("/create", UserController.CreateUser);

module.exports = routes;
