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

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/checkout", stripeRoutes);

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`app server is running on Port ${PORT}`) 
});