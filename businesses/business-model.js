const db = require("../database/dbConfig")

function list() {
    return db("business")
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
    return ()
}

function () {
    return ()
}


