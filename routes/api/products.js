const router = require("express").Router();
const Product = require("../../models/product");
const { verifyTokenAndAdmin } = require("./verifyToken");

//add product
router.post("/add", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update product
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete Product
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get Product
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;

        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1);
        } else if (qCategory) {
            products = await Product.find({
                category: {
                    $in: [qCategory]
                }
            });
        } else {
            products = await Product.find();
        }

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        category: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Search
router.get("/search", async (req, res) => {
  try {
    const { key, page, limit } = req.query;
    const skip = (page - 1) * limit;
    const search = key
      ? {
          $or: [
            { name: { $regex: key, $options: "$i" } },
            { category: { $regex: key, $options: "$i" } },
            { desc: { $regex: key, $options: "$i" } },
          ],
        }
      : {};
    const products = await Product.find(search).skip(skip).limit(limit);
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
