const crypto = require("crypto");
const jwt = require("jsonwebtoken");

module.exports = {
  generateRandomSalt,
  generateToken
}

function generateRandomSalt() {
  return crypto.randomBytes(48).toString("hex");
}

function generateToken(user) {
  const { password, ...userInfo } = user;
  return jwt.sign(
    userInfo,
    process.env.JWT_SECRET_KEY
    // { expiresIn: accessTokenExpireTime }
  );
}