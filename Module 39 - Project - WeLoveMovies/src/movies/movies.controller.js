const moviesService = require("./movies.service");

function list(req, res, next) {
  moviesService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

function read(movie_id) {
  return knex("movies").select("*").where({ movie_id }).first();
}

module.exports = {
  list,
  read,
};
