exports.up = function (knex) {
  return knex.schema.createTable("movies_theaters", (table) => {
    table.increments("combo_id").primary();
  });
};

exports.down = function (knex) {};
