const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jack" },
];

// app.use("/", (request, response) => {
//   response.send("Welcome my server");
// });

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  let user = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === Number(id)) {
      user = users[i];
    }
  }

  res.send(user ? user : "User not found");
});

app.get("/operation/:op1/:op2", (req, res) => {
  try {
    let a = null;
    console(a.b.c);
  } catch (e) {
    console.log(e);
    console.log("something happened");
    res.send("Error");
  }
});

app.post("/create-user", (req, res) => {
  let newUser = req.body;
  console.log(newUser);
  users.push(newUser);
  res.send(users);
});

app.delete("/delete-user/:id", (req, res) => {
  const id = req.params.id;

  let newUsers = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].id !== Number(id)) {
      newUsers.push(users[i]);
    }
  }

  users = newUsers;
  res.send(users);
});

// app.post("/users", (req, res) => {});

app.listen(3000, () => {
  console.log("server is running");
});
