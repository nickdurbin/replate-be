const db = require("../database/dbConfig")

function list() {
    return db("volunteer")
}

function findBy(filter) {
    return db("volunteer")
        .where(filter)
}

function findById(id) {
    return db("volunteer")
        .where({ id })
        .first()
}

async function insert(user) {
    const [id] = await db("volunteer")
        .insert(user)
        .returning("id")
    return findById(id)
}

async function update(id, changes) {
    await db("volunteer")
        .where({ id })
        .update(changes)
    return findById(id)
}

function remove(id) {
    return db("volunteer")
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
