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

module.exports = router
