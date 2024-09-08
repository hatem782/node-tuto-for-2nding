const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jack" },
];

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
});

const UserModel = mongoose.model("User", UserSchema);

// app.use("/", (request, response) => {
//   response.send("Welcome my server");
// });

// app.get("/users", (req, res) => {
//   res.send(users);
// });

// app.get("/users/:id", (req, res) => {
//   const id = req.params.id;
//   let user = null;

//   for (let i = 0; i < users.length; i++) {
//     if (users[i].id === Number(id)) {
//       user = users[i];
//     }
//   }

//   res.send(user ? user : "User not found");
// });

// app.get("/operation/:op1/:op2", (req, res) => {
//   try {
//     let a = null;
//     console(a.b.c);
//   } catch (e) {
//     console.log(e);
//     console.log("something happened");
//     res.send("Error");
//   }
// });

app.post("/create-user", async (req, res) => {
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
});

// app.put("/update-user/:id", (req, res) => {
//   try {
//     const id = req.params.id;

//     let exist = false;
//     let pos = -1;

//     for (let i = 0; i < users.length; i++) {
//       if (users[i].id == id) {
//         exist = true;
//         pos = i;
//       }
//     }

//     if (exist == false) {
//       return res.status(404).send("User not found");
//     }

//     let updUser = req.body;

//     users[pos].name = updUser.name;

//     res.send(users);
//   } catch (e) {
//     console.log(e);
//     res.status(500).send("Error");
//   }
// });

// app.delete("/delete-user/:id", (req, res) => {
//   const id = req.params.id;

//   let newUsers = [];

//   for (let i = 0; i < users.length; i++) {
//     if (users[i].id !== Number(id)) {
//       newUsers.push(users[i]);
//     }
//   }

//   users = newUsers;
//   res.send(users);
// });

// app.post("/users", (req, res) => {});

app.listen(3000, () => {
  console.log("server is running");
  mongoose
    .connect(
      "mongodb+srv://hatem782:gkZsvxzJa33uXgDh@cluster0.gkngm.mongodb.net/ISAMM"
    )
    .then(() => console.log("database connected!"));
});

//mongodb+srv://hatem782:gkZsvxzJa33uXgDh@cluster0.gkngm.mongodb.net/abc
