const express = require("express");

const app = express.Router();

let users = [
  {
    name: "shaheer",
    id: 1,
  },
  {
    name: "husnain",
    id: 2,
  },
];

// app.get('/users')
app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  console.log(id,'after middleware');

  res.json({ msg: "user retrieved!", user: users.find((u) => u.id == id) });
});

app.post("/users", (req, res) => {
  const data = req.body;

  users.push(data);

  res.json({ msg: "user added!", users });
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;

  let user = users.find((u) => u.id == id);
  user = { ...user, ...data };
  users = users.filter((u) => u.id != id);
  users.push(user);
  res.json({ msg: "user updated!", users });
});

module.exports = app
