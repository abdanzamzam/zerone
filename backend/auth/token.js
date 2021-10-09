const jwt = require("jsonwebtoken");

const generateToken = async (data) => {
     const token = jwt.sign(data, process.env.TOKEN_KEY);
     return token;
}

module.exports = {
     generateToken
}