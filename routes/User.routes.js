const express = require("express");
const routes = express.Router();
const UserController = require("../controllers/User.controller.js");

routes.post("/create", UserController.CreateUser);

/**
 * @swagger
 * /user/show:
 *   get:
 *     summary: Retrieve all books
 *     description: Retrieve a list of all books.
 *     responses:
 *       200:
 *         description: A list of books.
 */
routes.get("/show", UserController.ShowUsers);
routes.get("/show-one/:id", UserController.GetOneUser);
routes.delete("/delete/:id", UserController.DeleteUser);
routes.put("/update/:id", UserController.UpdateUser);
routes.post("/login", UserController.LoginUser);

module.exports = routes;
