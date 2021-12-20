const express= require('express');
const app=express();
const db=require('./connection');
const userRoute=require('./routes/user');
const authRoute=require('./routes/auth');
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

require('dotenv').config();

db();

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);




app.listen(process.env.PORT || 5000 ,() => {
    console.log("Backend server is running");
});

