const UserModel = require("../models/User.model.js");
const bcrypt = require("bcrypt");

const CreateUser = async (req, res) => {
  try {
    let newPass = await bcrypt.hash(req.body.password, 10);

    const newUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: newPass,
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

const LoginUser = async (req, res) => {
  try {
    // SELECT * from Users where email == req.body.email
    const user = await UserModel.findOne({ email: req.body.email });

    if (user === null) {
      return res.status(404).send({ message: "User not found" });
    }

    let cryptedPass = user.password;
    let notCrypedPass = req.body.password;
    const matched = await bcrypt.compare(notCrypedPass, cryptedPass);

    if (!matched) {
      return res.status(401).send({ message: "Password incorrect" });
    }

    res.status(200).send({ message: "Welcome " + user.name });
  } catch (e) {
    console.log(e);
    res.status(500).send("Error");
  }
};

const ShowUsers = async (req, res) => {
  try {
    const queryData = req.query;

    console.log(queryData);

    let filter = {};

    if (queryData.name) {
      filter.name = queryData.name;
    }

    if (queryData.email) {
      filter.email = queryData.email;
    }

    const users = await UserModel.find(filter);

    res.status(200).send(users);
  } catch (e) {
    console.log(e);
    res.status(500).send("Error");
  }
};

const GetOneUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await UserModel.findById(userId);

    res.status(200).send(user);
  } catch (e) {
    console.log(e);
    res.status(500).send("Error");
  }
};

const DeleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await UserModel.deleteOne({ _id: userId });

    res.status(200).send({
      message: "deleted",
      data: user,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Error");
  }
};

const UpdateUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const existUser = await UserModel.findById(userId);

    if (existUser === null) {
      return res.status(404).send({ message: "User not found" });
    }

    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      {
        name: req.body.name,
        email: req.body.email,
      },
      { new: true }
    );

    res.status(200).send({
      message: "updated",
      data: updatedUser,
    });

    // const newUser = new UserModel({
    //   name: req.body.name,
    //   email: req.body.email,
    // });

    console.log(newUser);

    const respBD = await newUser.save();
    console.log(respBD);

    res.status(200).send({ message: "created succ", data: respBD });
  } catch (e) {
    console.log(e);
    res.status(500).send("Error");
  }
};

module.exports = {
  CreateUser,
  ShowUsers,
  GetOneUser,
  DeleteUser,
  UpdateUser,
  LoginUser,
};
