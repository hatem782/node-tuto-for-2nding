const PostModel = require("../models/Post.model");

const CreatePost = async (req, res) => {
  try {
    const newPost = new PostModel({
      title: req.body.title,
      content: req.body.content,
      user: req.body.user_id,
    });

    console.log(newPost);

    const respBD = await newPost.save();
    console.log(respBD);

    res.status(200).send({ message: "created succ", data: respBD });
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
