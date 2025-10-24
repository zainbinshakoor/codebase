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
const Product = require("./model/Products");
const Order = require("./model/Order");

const app = express();

app.use(express.json());

mongoose
  .connect("")
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

// products
app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();

  res.send(product);
});

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

//ordered products
app.post("/order", async (req, res) => {
  const order = new Order(req.body);
  await order.save();

  res.send(order);
});

app.get("/orders", async (req, res) => {
  // const orders = await Order.find()
  //   .populate("userId", "name email")
  //   .populate("products.productId", "name price");

    const orders = Order.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $lookup: {
          from: "products",
          localField: "products.productId",
          foreignField: "_id",
          as: "productDetails",
        },
      },
      {
        $project: {
          totalAmount: 1,
          orderDate: 1,
          status: 1,
          "user.name": 1,
          "user.email": 1,
          productDetails: 1,
        },
      },
    ]).exec()
  .then(orders => res.send(orders))
  .catch(err => console.error(err));
    
});

app.delete("/orders/:id", async (req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  res.send({ msg: "Order deleted", order });
});

app.listen(4000, () => console.log("App running!"));
