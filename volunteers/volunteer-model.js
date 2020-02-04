const db = require("../database/dbConfig")

function list() {
    return db("volunteer")
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

function insert(user) {
    user.password = bcrypt.hashSync(user.password, 12)
    return db("volunteer")
        .insert(user)
        .returning("id")
    //return findById(id)
}

function update(id, changes) {
    return db("volunteer")
        .where({ id })
        .update(changes)
        .returning("id")
    //return findById(id)
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
