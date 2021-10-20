const knex = require("../db/connection");

function read(review_id) {
  return knex("reviews").where({ review_id });
}

function update(updatedReview) {
  return knex("reviews")
    .select("*")
    .where({ review_id: updatedReview.review_id })
    .update(updatedReview, "*")
    .then((updatedRecords) => updatedRecords[0]);
}

module.exports = {
  read,
  update,
};
