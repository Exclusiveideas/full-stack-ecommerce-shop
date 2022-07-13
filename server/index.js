const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user.js");
const authRoutes = require("./routes/auth.js");
const productRoutes = require("./routes/product.js");
const cartRoutes = require("./routes/cart.js");
const orderRoutes = require("./routes/order.js");
const stripeRoutes = require("./routes/stripe.js");

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("db connected"))
    .catch((err) => {
        console.log("error connecting db >>", err)
    })

app.use(cors({
    origin: '*'
})); 
app.use(function(req, res, next) {
 
    res.setHeader('Access-Control-Allow-Origin', 'https://e-commerce-a8b84.web.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
  });

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Application running")
})
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/checkout", stripeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App server is running on Port ${PORT}`) 
});