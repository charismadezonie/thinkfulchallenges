exports.up = function (knex) {
  return knex.schema.createTable("reviews", (table) => {
    table.increments("review_id").primary();
  });
};

exports.down = function (knex) {};
