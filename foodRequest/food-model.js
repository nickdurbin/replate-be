const db = require("../database/dbConfig")

function list() {
    return db("food_request")
    .select("type", "servings", "pickup_time", "description")
}

function findBy(filter) {
    return db("food-request")
        .where(filter)
}

function findById(id) {
    return db("food_request")
        .where({ id })
        .first()
}
// food_request does not have a user. What would I call in as a parameter?
async function insert(food_request) {
    const [ id ] = await db("food_request")
        .insert("food_request")
        .returning("id")
        return findById(id)
}

async function update(id, changes) {
    await db("food_request")
        .where({ id })
        .update(changes)
        .returning("id")
        return findById(id)
}

function remove(id) {
    return db("food_request")
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
