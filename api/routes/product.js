import Router from "express";
import { verifyTokenAndAdmin } from "./verifyToken.js";
import Product from "../models/Product.js";

const router = Router();

// Create

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
    console.log("Product Saved Sucessfully!!");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// Update Method

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
    console.log("Updated Sucessfully!!");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// Delete Method

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
    console.log("Deleted Sucessfully!!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Product Method

router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
    console.log("Fetched Product Sucessfully!!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All Products Method

router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;

  try {
    let query = {};
    let products;

    if (qCategory) {
      query.categories = {
        $in: [qCategory],
      };
    }

    // console.log("Query Object Built:", query); 

    products = await Product.find(query);

    // console.log("Filtered Products:", products.length);

    if (qNew) {
      products = products
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5);
        // console.log("Sorted and Limited Products:", products.length); 
    }
    res.status(200).json(products);
    console.log("Fetched All Products Sucessfully!!");
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
