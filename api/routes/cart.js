import Router from "express";
import {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "./verifyToken.js";
import Cart from "../models/Cart.js";

const router = Router();

// Create

router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
    console.log("Cart Saved Sucessfully!!");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// Update Method

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
    console.log("Updated sucessfully!!");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// Delete Method

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
    console.log("Deleted Sucessfully!!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get User Cart Method

router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
    console.log("Fetched User Cart Sucessfully!!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Get All Method

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
    console.log("Fetched All Carts Sucessfully!!");
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
