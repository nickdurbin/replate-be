const jwt = require('jsonwebtoken')
const jwtConfig = require("../config/jwtConfig")

module.exports = (req, res, next) => {
    const { authorization } = req.headers

    if (authorization) {
        jwt.verify(authorization, jwtConfig.jwtSecret, function (err, decodedToken) {
            if (err) {
                console.log(err)
                return res.status(401).json({ message: "Invalid Token." })
            } else {
                req.token = decodedToken

                next()
            }
        })

    } else {
        return res.status(401).json({ message: "You may not continue" })
    }
}