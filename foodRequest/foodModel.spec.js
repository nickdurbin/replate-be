const db = require("../database/dbConfig")
const FoodModel = require("../foodRequest/food-model")

beforeAll(async () => {
    await db.seed.run()
})

// describe("food model list", () => {
//     test("list", async () => {
//         const res = await FoodModel.list()
//         expect(res).toBeGreaterThan[1]
//     })
// })

describe("find food request in model", () => {
    test("findById", async () => {
        const res = await FoodModel.findById(1)
        expect(res.type).toBe("soups")
    })

    test("update food request", async () => {
        await VolunteerModel.update(1, { name: "salads" })
        const food = await VolunteerModel.findById(1)
        expect(food.name).toBe("salads")
    })

    test("remove food request", async () => {
        await FoodModel.remove(1)
        const food = await FoodModel.list()
        expect(food).toHaveLength(0)
    })
})