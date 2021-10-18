exports.up = function (knex) {
  return knex.schema.createTable("movies", (table) => {
    table.increments("movie_id").primary();
  });
};

exports.down = function (knex) {};
