const bcrypt = require("bcryptjs")
const VolunteerModel = require("../volunteers/volunteer-model")
const authenticate = require("../middleware/authenticate")
const {signToken} = require("../volunteers/volunteer-token")

const router = require("express").Router()

router.get("/", authenticate, async (req, res, next) => {
    try {
        const volunteers = await VolunteerModel.list()

        return res.status(201).json(volunteers)

    } catch (err) {
        next(err)
    }
})


router.post("/register", async (req, res, next) => {
    try {
        const volunteerUser = await VolunteerModel.insert(req.body)

        return res.status(201).json(volunteerUser)

    } catch (err) {
        next(err)
    }
})

router.post("/login", async (req, res, next) => {
    try {
        const { username, password } = req.body

        const user = await VolunteerModel.findBy({ username })
            .first()

        if (user && bcrypt.compare(password, user.password)) {
            const token = signToken(user)

            return res.status(200).json({
                token,
                message: `Welcome ${user.username}!`
            })
        } else {
            return res.status(401).json({ message: "Invalid credentials, please try again." })
        }

    } catch (err) {
        next(err)
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
            
            return res.status(403).json({ message: "You are not authorized." })
        }
    }
}

module.exports = router;