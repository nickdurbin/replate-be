
exports.up = async function (knex) {
    await knex.schema.createTable("volunteer", (table) => {
        table.increments("id")
        table.string("username", 280).notNullable().unique()
        table.string("password", 280).notNullable()
        table.string("volunteer-name", 280).notNullable()
        table.integer("volunteer-phone-number", 10).notNullable()
    })
}

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("volunteer")

}