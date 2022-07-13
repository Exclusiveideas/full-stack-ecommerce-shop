const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if(authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if(err) return res.status(403).json("Token is not valid");
            req.user = user;
            next();
        });

    } else {
        return res.status(402).json("You are not authenticated");
    }
};

const verifyAndAuthorizeToken = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(405).json("Action not authorized");
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(405).json("Action not authorized");
        }
    })
};



module.exports = { verifyToken, verifyAndAuthorizeToken, verifyTokenAndAdmin };