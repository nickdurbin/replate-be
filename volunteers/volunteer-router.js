const bcrypt = require("bcryptjs")
const VolunteerModel = require("../volunteers/volunteer-model")
const FoodModel = require("../foodRequest/food-model")
const authenticate = require("../middleware/authenticate")
const signToken = require("../volunteers/volunteer-token")

const router = require("express").Router()

router.get("/", authenticate, authorizeUser("volunteer"), (req, res) => {
    const requestOptions = {
        headers: { accept: "application/json" },
    }

    axios.get("", requestOptions)
    // .then(response => {
    //     return res.status(200).json(response.data.results);
    // })
    // .catch(err => {
    //     return res.status(500).json({ message: 'Error getting volunteers.', error: err });
    // });
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

        const user = await VolunteerModel.findby({ username })
            .first()

        if (user && bcrypt.compareSync(password, user.password)) {
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
            console.log(req.token)
            console.log(role)
            return res.status(403).json({ message: "You are not authorized." })
        }
    }
}

module.exports = router;