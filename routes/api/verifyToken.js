const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

    const authHeader = req.headers.token;

    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.token(token, process.env.JWT_SEC, (err, user) => {

            if (err) res.status(401).json("Token is not valid!");
            req.user = user;
            next()
        })

    } else {
        return res.status(401).json("You are not authonicated");
    }
}
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(403).json("You are not an admin");
        }
    })
}

module.exports = { verifyToken, verifyTokenAndAuthorization };


