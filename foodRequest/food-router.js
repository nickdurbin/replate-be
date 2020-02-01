
const FoodModel = require("../foodRequest/food-model")

const router = require("express").Router()

router.get("/api/foodPickup", async (res, req, next) => {
    try{
        const foodRequest = await FoodModel.insert(req.body)
        return res.status(200).json(foodRequest)
    } catch (err) {
        next(err)
    }
})

module.exports = router
