const router = require("express").Router();
const User = require("../models/User.js");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register
router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password ) {
        res.status(400).json("Invalid/Incomplete input");
        return
    } 
    
    const existingUser = await User.findOne({ username});
    if(existingUser) {
        res.status(401).json({message: "User already exists"});
        return;
    } 

    const newUser = new User({
        username: username,
        password: CryptoJS.AES.encrypt(password, process.env.PASSWORD_SECRET_KEY).toString(),
    })

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch(err) {
        res.status(500).json(err);
    }

});

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username});
        if(!user) {
            res.status(401).json("Wrong Credentials"); 
            return;
        } 

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        if(originalPassword != req.body.password) {
            res.status(401).json("Wrong Credentials");
            return
        }

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, 
        process.env.JWT_SECRET_KEY, 
        {expiresIn: "3d"}
        );

        const { password, ...others} = user._doc;

        res.status(201).json({...others, accessToken});
    } catch(err) {
        res.status(501).json(err)
    }
    
});

module.exports = router;