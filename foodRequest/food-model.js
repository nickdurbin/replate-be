const db = require("../database/dbConfig")

function list() {
    return db("food-request")
}

function findBy(filter) {
    return db("food-request")
        .where(filter)
}

function findById(id) {
    return db("food-request")
        .where({ id })
        .first()
}

async function insert(user) {
    const [id] = await db("food-request")
        .insert(user)
        .returning("id")
    return findById(id)
}

async function update(id, changes) {
    await db("food-request")
        .where({ id })
        .update(changes)
    return findById(id)
}

function remove(id) {
    return db("food-request")
        .where({ id })
        .del()
}

module.exports = {
    list,
    findBy,
    findById,
    insert,
    update,
    remove,
}
