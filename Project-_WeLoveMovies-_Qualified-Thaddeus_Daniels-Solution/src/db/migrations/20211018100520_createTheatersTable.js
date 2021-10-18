exports.up = function (knex) {
  return knex.schema.createTable("theaters", (table) => {
    table.increments("table_id").primary();
  });
};

exports.down = function (knex) {};
