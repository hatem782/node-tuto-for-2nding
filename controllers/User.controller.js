const UserModel = require("../models/User.model.js");

const CreateUser = async (req, res) => {
  try {
    const newUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
    });

    console.log(newUser);

    const respBD = await newUser.save();
    console.log(respBD);

    res.status(200).send({ message: "created succ", data: respBD });
  } catch (e) {
    console.log(e);
    res.status(500).send("Error");
  }
};

const GetUser = async (req, res) => {
  try {
    console.log("get user");
  } catch (e) {
    console.log(e);
    res.status(500).send("Error");
  }
};

module.exports = {
  CreateUser,
  GetUser,
};
