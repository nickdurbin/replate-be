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

router.get("/:id", authenticate, async (req, res, next) => {
    try {
        const { id } = req.params
        const volunteer = await VolunteerModel.findById(id)

        if (volunteer) {
            return res.status(200).json(volunteer)
        } else {
            return res.status(404).json({ message: "Could not find volunteer with this Id." })
        }

    }
    catch (err) {
        next(err)
    }
})

router.put("/:id", authenticate, async (req, res, next) => {
    try {
        const { id } = req.params //returns an object
        const volunteers = await VolunteerModel.update(req.body, id)

        if (volunteers) {
             res.json(volunteers)
        } else {
            return res.status(404).json({
                message: "Could not find volunteers with given ID",
            })
        }
    } catch (err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        const volunteerUser = await VolunteerModel.insert(req.body)
        const token = signToken(volunteerUser)

        return res.status(200).json({
            token,
            message: `Welcome ${volunteerUser.username}!`
        })

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

router.delete("/:id", authenticate, async (req, res, next) => {
    try {
        const { id } = await db("volunteer")
            .where({ id: req.params.id })
            .del()
        return res.status(200).json({ id: req.params.id })
    }
    catch (err) {
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