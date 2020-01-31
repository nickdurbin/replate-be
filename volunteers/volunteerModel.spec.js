const db = require("../database/dbConfig")
const VolunteerModel = require("../volunteers/volunteer-model")

beforeEach(async () => {
    await db.seed.run()
})

describe("volunteer model list", () => {
    test("list", async () => {
        const res = await VolunteerModel.list()
        expect(res).toBeGreaterThan[1]
    })
})

describe("find user in volunteer model", () => {
    test("findById", async () => {
        const res = await VolunteerModel.findById(1)
        expect(res.username).toBe("joseph")
    })

    test("update user", async () => {
        await VolunteerModel.update(1, { username: "joseph4" })
        const user = await VolunteerModel.findById(1)
        expect(user.username).toBe("joseph4")
    })

    test("remove user", async () => {
        await VolunteerModel.remove(1)
        const user = await VolunteerModel.list()
        expect(user).toHaveLength(2)
    })
})