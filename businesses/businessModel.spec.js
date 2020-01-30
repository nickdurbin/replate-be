const db = require("../database/dbConfig")
const BusinessModel = require("../businesses/business-model")

beforeEach(async () => {
    await db.seed.run()
})

describe("business model list", () => {
    test ("list", async () => {
        const res = await BusinessModel.list()
        expect(res).toBeGreaterThan[1]
    })
})

describe("find user in business model", () => {
    test("findById", async () => {
        const res = await BusinessModel.findById(1)
        expect(res.username).toBe("lambda")
    })

    test("update user", async () => {
        await BusinessModel.update(1, { username: "lambda4" })
        const user = await BusinessModel.findById(1)
        expect(user.username).toBe("lambda4")
    })

    test("remove user", async () => {
        await BusinessModel.remove(1)
        const user = await BusinessModel.list()
        expect(user).toHaveLength(2)
        // console.log(user)
    })
})