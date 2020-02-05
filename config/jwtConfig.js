require("dotenv").config()

module.exports = {
    
    jwtSecret: process.env.JWT_SECRET,
    options: {
        expiresIn: process.env.JWT_EXPIRATION || "7d"
    }

}