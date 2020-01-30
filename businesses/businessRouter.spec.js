const supertest = require("supertest")
const server = require("../server")
const db = require("../database/dbConfig")

beforeEach(async () => {
    await db.seed.run()
})

test("welcome route", async () => {
    const res = await supertest(server).get("/")

    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Welcome to Replate!")
})

test("create business user route", async () => {
    const res = await supertest(server)
        .post("/api/businesses/register")
        .send({ username: "lambda", password: "abc123" })

    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.username).toBe("lambda")
})