
exports.up = async function(knex) {
  await knex.schema.createTable("food-request", (table) => {
      table.increments("id")
      table.string("type", 280).notNullable
      table.float("amount-servings", 280).notNullable()
      table.date("pickup-date").notNullable()
      table.time("pickup-time").notNullable()
      table.string("description", 500).notNullable()
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
    table.primary(["business_id", "food-request_id"])
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("food-request")
};
