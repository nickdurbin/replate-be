const db = require("../database/dbConfig")

function list() {
    return db("food-request")
    .select("type", "servings", "pickup_time", "description")
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

function insert(user) {
    return db("food-request")
        .insert(user)
        .returning("id")
    //return findById(id)
}

function update(id, changes) {
    return db("food-request")
        .where({ id })
        .update(changes)
        .returning("id")
    //return findById(id)
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
