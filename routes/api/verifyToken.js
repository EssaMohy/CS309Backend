const jwt = require("jsonwebtoken");
//creating token for each user
const verifyToken = (req, res, next) => {
<<<<<<< HEAD
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};
//Check if can make changes
const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You can't make that change");
    }
  });
};
//Check if an Admin
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("Sorry, you're not an admin");
    }
  });
};
=======

    const authHeader = req.headers.token;

    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, "More Secret", (err, user) => {

            if (err) { res.status(403).json("Token is not valid!") };
            req.user = user;
            next();
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
const verifyTokenAndِAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            res.status(403).json("You are not an admin");
        }
    })
}

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndِAdmin };

>>>>>>> 06b59997cf1ea243d466a02083f7acf15a73d18e

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};