const Cart = require("../models/Cart.js");
const {verifyToken, verifyAndAuthorizeToken, verifyTokenAndAdmin } = require("./verifyToken.js");
const router = require("express").Router();


//CREATE
router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save();

        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
})

// //UPDATE
router.put("/:id", verifyAndAuthorizeToken, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });

        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(505).json(err);
    }
})


//DELETE

router.delete("/:id", verifyAndAuthorizeToken, async(req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted");
    } catch(err) {
        res.status(506).json(err);
    }
})


//Get User Cart
router.get("/find/:userId", verifyAndAuthorizeToken, async(req, res) => {
    try {
        const userCart = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(userCart);
    } catch(err) {
        res.status(507).json(err);
    }
});

//Get All 

router.get("/", verifyTokenAndAdmin, async(req, res) => {
    try{
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;