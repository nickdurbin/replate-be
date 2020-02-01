
exports.up = async function(knex) {
  await knex.schema.createTable("food_request", (table) => {
      table.increments("id")
      table.string("type", 280).notNullable
      table.float("amount/servings", 280)
      table.timestamp("pickup_time")
      table.string("description", 500)
      table.boolean('completed').defaultTo(false);

        table.integer("business_id")
        .notNullable()
        .references("id")
        .inTable("business")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")

       table.integer("volunteer_id")
        .notNullable()
        .references("id")
        .inTable("volunteer")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    // table.primary(["business_id", "food-request_id"])
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("volunteer_id")
  await knex.schema.dropTableIfExists("business_id")
  await knex.schema.dropTableIfExists("food_request")
};
