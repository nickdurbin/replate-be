const db = require("../database/dbConfig")
const bcrypt = require("bcryptjs")

function list() {
    return db("volunteer")
    .select("name", "phone")
}

function findBy(filter) {
    return db("volunteer")
        .where(filter)
        //.select(id, request, completed, etc.)
}

function findById(id) {
    return db("volunteer")
        .where({ id })
        .first()
}

async function insert(user) {
    user.password = bcrypt.hashSync(user.password, 12)
    const [ id ] = await db("volunteer")
        .insert(user)
        .returning("id")
        return findById(id)
}

async function update(id, changes) {
    await db("volunteer")
        .where({ id })
        .update(changes)
        .returning("id")
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
