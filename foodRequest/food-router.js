const FoodModel = require("../foodRequest/food-model")

const router = require("express").Router()

router.get("/", async (req, res, next) => {
    try{
        const foodRequest = await FoodModel.list(req.body)

        return res.status(200).json(foodRequest)

    } catch (err) {
        next(err)
    }
})


router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const food_request = await FoodModel.findById(id)

        if (food_request) {
            return res.status(200).json(food_request)
        } else {
            return res.status(404).json({ message: "Could not find food_request with this Id." })
        }

    }
    catch (err) {
        next(err)
    }
})


router.post("/", async (req, res, next) => {
    try {
        const id = await FoodModel.insert(req.body) //returns an array

        const food_request = await FoodModel.findById(id)

        return res.status(201).json(food_request)
    }
    catch (err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const { id } = req.params //returns an object
        const food_request = await FoodModel.update(req.body, id)

        if (food_request) {
            res.json(food_request)
        } else {
            return res.status(404).json({
                message: "Could not find food_request with given ID",
            })
        }
    } catch (err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = await db("food_request")
            .where({ id: req.params.id })
            .del()
        return res.status(200).json({ id: req.params.id })
    }
    catch (err) {
        next(err)
    }
})

module.exports = router
