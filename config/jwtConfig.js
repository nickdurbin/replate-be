
module.exports = {
    
    jwtSecret: process.env.JWT_SECRET || "Build week is terrifying and exciting, all at the same time!",
    options: {
        expiresIn: process.env.JWT_EXPIRATION || "12h"
    }

}