
exports.up = async function(knex) {
    await knex.schema.createTable("business", (table) => {
      table.increments("id")
      table.string("username", 280).notNullable().unique()
      table.string("password", 280).notNullable()
      table.string("name", 280)(null)
      table.string("address", 280)(null)
      table.integer("phone-number", 10)(null).unique()
      table.string("email", 280)(null)
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("business")
  
};
