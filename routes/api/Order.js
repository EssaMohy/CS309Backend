const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndِAdmin } = require("./verifyToken");
const Order = require("../../models/Order");
const router = require("express").Router();

//new Order
router.post("/new", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

//update Order
router.put("/:id", verifyTokenAndِAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true },
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete Order
router.delete("/:id", verifyTokenAndِAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
});

//get User's Orders
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const orders = await Order.findO({ userId: req.params.userId });
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get all OrderS
router.get("/", verifyTokenAndِAdmin, async (req, res) => {
    try {
        let orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;