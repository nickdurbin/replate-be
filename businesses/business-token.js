const jwt = require("jsonwebtoken")
const config = require("../config/jwtConfig")

function signToken(businessUser) {
    const payload = {
        subject: businessUser.id,
        username: businessUser.username,
        role: "donator",
    }

    return jwt.sign(payload, config.jwtSecret, config.options)
}

module.exports = { signToken }