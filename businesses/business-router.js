const bcrypt = require("bcryptjs")
const BusinessModel = require("../businesses/business-model")
const FoodModel = require("../foodRequest/food-model")
const authenticate = require("../middleware/authenticate")
const signToken = require("../businesses/business-token")
const

const router = require("express").Router()

router.post("/register", async (req, res, next) => {
    try {
        const businessUser = await BusinessModel.insert(req.body)
        return res.status(201).json(businessUser)

    } catch (err) {
        next(err)
    }
})

router.post("/login", async (req, res, next) => {
    try{
        const { username, password } = req.body
        
        const user = await BusinessModel.findby({ username })
        .first()

        if (user && bcrypt.compareSync(password, user.password)) {
            const token = signToken(user)

            return res.status(200).json({
                token,
                message: `Welcome ${user.username}!`
            })
        } else {
            return res.status(401).json({ message: "Invalid credentials, please try again."})
        }
 
    } catch (err) {
        next (err)
    }
})

router.get("/protected", authenticate, async (req, res, next) => {
    try {
        return res.status(200).json({ message: "You are authorized.", })
    } catch (err) {
        next(err)
    }
})


function authorizeUser(role) {
    return function (req, res, next) {
        if (req.token && role === req.token.role) {
            next()
        } else {
            console.log(req.token)
            console.log(role)
            return res.status(403).json({ message: "You are not authorized." })
        }
    }
}

module.exports = router;