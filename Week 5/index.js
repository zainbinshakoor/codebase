// const express = require("express");
// const cors = require("cors");
// const app = express();
// const Event = require('events')

// const emitter = new Event()
// // app.use();
// app.use(express.json());
// app.use(cors({ origin: ["http://localhost:3000", "https://yourdomain.com"] }));

// app.use((req, res, next) => {
//   console.log("middleware");
//   next();
// });

// const userRoutes = require("./users");

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.use("/api", userRoutes);

// emitter.on("call",()=>console.log("hello"))

// // emitter.emit("call")

// app.listen(4000, () => console.log("Server running!"));

const express = require("express");

const mongoose = require("mongoose");
const User = require("./model/User");

const app = express();

app.use(express.json());

mongoose
  // .connect("mongodb://localhost:27017/icode")
  "mongodb+srv://husnain:husnian@cluster0.e4xcc7x.mongodb.net/icode"
  .then(() => console.log("connected!"))
  .catch((err) => console.log(err));

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();

  res.send(user);
});

app.get("/users", async (req, res) => {
  const users = await User.find({age:{$lte: 19}});
  res.send(users);
});

app.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.send(user);
});

app.listen(4000, () => console.log("App running!"));
