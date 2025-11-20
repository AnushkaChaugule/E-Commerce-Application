import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connect } from "mongoose";
import { config } from "dotenv";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js";
import braintreeRoute from "./routes/braintree.js";

const app = express();

config();

connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Sucessfull!"))
  .catch((err) => {
    console.log("Error:", err);
  });

app.use(cors());

app.use(bodyParser.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/braintree", braintreeRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log("Backend Server is Running!");
});
