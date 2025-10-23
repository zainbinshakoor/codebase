// const fs = require("fs");
// const os = require("os");
// // fs.writeFileSync("Hello.txt","Hello Icode coders!")

// // const msg = fs.readFileSync("Hello.txt",'utf8')

// // console.log(msg)

// // console.log(os.platform())

// // console.log('hello')

// const http = require("http");
// const math = require('./math')

// const server = http.createServer((request, response) => {
//   response.statusCode = 404; //ok
//   response.end(JSON.stringify({ msg: "Hello this is first api!" }));
// });

// console.log(math.add(5,7))

// server.listen(3000, () => {
//   console.log("server is starting!");
// });

const express = require("express");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello");
});
const users = [
  {
    name: "Abc",
  },
  {
    name: "xyz",
  },
];
app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
    console.log("hello")
  const data = req.body;
  console.log(data)
  users.push(data);

  res.status(201).json({
    msg: "New user added!",
    users,
  });
});

app.listen(4000, () => {
  console.log("running");
});