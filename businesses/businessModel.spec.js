const db = require("../database/dbConfig")
const BusinessModel = require("../businesses/business-model")

beforeEach(async () => {
    await db.seed.run()
})

describe("business model list", () => {
    test ("list", async () => {
        const res = await BusinessModel.list()
        expect(res).toBe("name", "address", "phone", "email")
    })
})

describe("find user in business model", () => {
    test("findById", async () => {
        const res = await BusinessModel.findById(1)
        expect(res.username).toBe("joseph")
    })

    test("update business", async () => {
        await BusinessModel.update(2, { name: "Jimmy Johns" })
        const user = await BusinessModel.findById(2)
        expect(user.name).toBe("Jimmy Johns")
    })

    test("remove business user", async () => {
        await BusinessModel.remove(1)
        const user = await BusinessModel.list()
        expect(user).toHaveLength(9)
        // console.log(user)
    })
})