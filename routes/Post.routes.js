const express = require("express");
const routes = express.Router();
const PostController = require("../controllers/Post.controller");

routes.post("/create", PostController.CreatePost);
routes.get("/show", PostController.ShowPostes);

module.exports = routes;
