const supertest = require("supertest")
const server = require("../server")
const db = require("../database/dbConfig")

beforeAll(async () => {
    await db.seed.run()
})

test("welcome route", async () => {
    const res = await supertest(server).get("/")

    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Welcome to Replate!")
})

test("create volunteer user route", async () => {
    const res = await supertest(server)
        .post("/api/volunteers/register")
        .send({ username: "joseph", password: "abc123" })

    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.username).toBe("joseph")
})

test("check volunteer login status", async () => {
    const res = await supertest(server)
        .post("/api/auth/login")
        .send({ username: "joseph" })

    expect(res.status).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body).toBe(username, "joseph")

})