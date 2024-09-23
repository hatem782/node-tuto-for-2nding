const PostModel = require("../models/Post.model");
const jwt = require("jsonwebtoken");

const CreatePost = async (req, res) => {
  try {
    const _id = req.user._id;
    console.log(_id);

    const newPost = new PostModel({
      title: req.body.title,
      content: req.body.content,
      user: _id,
    });
    console.log(newPost);
    const respBD = await newPost.save();
    console.log(respBD);

    // res.status(200).send({ message: "created succ", data: respBD });
    res.status(200).send({ message: "created succ" });
  } catch (e) {
    console.log(e);
    res.status(500).send("Error");
  }
};

const ShowPostes = async (req, res) => {
  try {
    const postes = await PostModel.find({}).populate("user");
    res.status(200).send(postes);
  } catch (e) {
    console.log(e);
    res.status(500).send("Error");
  }
};

module.exports = {
  CreatePost,
  ShowPostes,
};
