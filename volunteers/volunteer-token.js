const jwt = require("jsonwebtoken")
const config = require("../config/jwtConfig")

function signToken(volunteerUser) {
    const payload = {
        subject: volunteerUser.id,
        username: volunteerUser.username,
        role: "volunteer",
    }

    return jwt.sign(payload, config.jwtSecret, config.options)
}

module.exports = signToken 