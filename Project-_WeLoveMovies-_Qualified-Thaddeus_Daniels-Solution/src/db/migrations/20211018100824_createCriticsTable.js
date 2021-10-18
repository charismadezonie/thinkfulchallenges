exports.up = function (knex) {
  return knex.schema.createTable("critics", (table) => {
    table.increments("critic_id").primary();
  });
};

exports.down = function (knex) {};
