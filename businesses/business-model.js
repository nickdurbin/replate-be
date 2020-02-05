const db = require("../database/dbConfig")
const bcrypt = require("bcryptjs")

function list() {
    return db("business")
    .select("name", "address", "phone", "email")
}

function findBy(filter) {
    return db("business")
    .where(filter)
}

function findById(id) {
    return db("business")
    .where({ id })
    .first()
}

async function insert(user) {
    user.password = bcrypt.hashSync(user.password, 12)
    const [ id ] = await db("business")
    .insert(user)
    .returning("id")
    return findById(id)
}

async function update(id, changes) {
    await db("business")
        .where({ id })
        .update(changes)
        .returning("id")
        return findById(id)
}

function remove(id) {
    return db("business")
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
