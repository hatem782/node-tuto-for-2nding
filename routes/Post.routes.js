const express = require("express");
const routes = express.Router();
const PostController = require("../controllers/Post.controller");
const { authMiddleware } = require("../middleware/verifyAuth");

routes.post("/create", authMiddleware, PostController.CreatePost);
routes.get("/show", PostController.ShowPostes);

module.exports = routes;
