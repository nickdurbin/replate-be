
exports.up = async function(knex) {
    await knex.schema.createTable("business", (table) => {
      table.increments("id")
      table.string("username", 280).notNullable().unique()
      table.string("password", 280).notNullable()
      table.string("business-name", 280).notNullable()
      table.string("business-address", 280).notNullable()
      table.integer("business-phone-number", 10).notNullable.unique()
      table.string("business-email", 280).null()
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("business")
  
};
