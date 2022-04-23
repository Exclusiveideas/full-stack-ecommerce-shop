const User = require("../models/User.js");
const { verifyAndAuthorizeToken, verifyTokenAndAdmin } = require("./verifyToken.js");

const router = require("express").Router();

//UPDATE

router.put("/:id", verifyAndAuthorizeToken, async(req, res) => {
    if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            password, 
            process.env.PASSWORD_SECRET_KEY
            ).toString();
    }

    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true});

        res.status(200).json(updatedUser);
    } catch(err) {
        res.status(505).json(err);
    }
});

//DELETE

router.delete("/:id", verifyAndAuthorizeToken, async(req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
    } catch(err) {
        res.status(506).json(err);
    }
})

//Get User

router.get("/find/:id", verifyTokenAndAdmin, async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc; 
        res.status(200).json(others);
    } catch(err) {
        res.status(507).json(err);
    }
});

//Get ALL Users
router.get("/", verifyTokenAndAdmin, async(req, res) => {
    const query = req.query.new;

    try {
        const users = query 
        ? await User.find().sort({ _id: -1 }).limit(5) 
        : await User.find();
        res.status(200).json(users);
    } catch(err) {
        res.status(507).json(err);
    }
});


//GET USER STATS
router.get("/stats", verifyTokenAndAdmin, async(req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try{

        const data = await User.aggregate([
            {$match: {createdAt: {$gte: lastYear }}},
            {
                $project: {
                    month: {$month: "$createdAt"},
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1},
                }
            }
        ])
        res.status(200).json(data);
    } catch(err) {
        res.status(508).json(err);
    }
})


module.exports = router;