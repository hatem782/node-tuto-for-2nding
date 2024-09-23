const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    // Extract the token from the request headers
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    // Verify the token
    const result = jwt.verify(token, "ISAMM2024");
    const user = result.user;
    if (!user) {
      return res.status(401).json({ message: "Unauthorized:User not found" });
    }

    // Attach the admin data to the request object
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

module.exports = {
  authMiddleware,
};
