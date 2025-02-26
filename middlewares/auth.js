const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../utils/config");

const auth = {
  verifyLogin: async (req, res, next) => {
    const token = req.header("authorization").substring(7);
    if (!token) return res.status(401).json({ error: "Access denied" });

    try {
      const verified = jwt.verify(token, SECRET_KEY);
      req.userId = verified.id;
    } catch (error) {
      res.status(400).json({ error: "Invalid token" });
    }

    next();
  },
};

module.exports = auth;
