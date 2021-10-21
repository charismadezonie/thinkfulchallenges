const knex = require("../db/connection");

function read(reviewId) {
  return knex("reviews").where({ review_id: reviewId });
}

function list() {
  return knex("reviews").select("*");
}

function update(updatedReview, reviewId) {
  return knex("reviews")
    .select("*")
    .where({ review_id: updatedReview.review_id })
    .update(updatedReview, "*")
    .then((updatedRecords) => updatedRecords[0]);
}

function getCritic(criticId) {
  return db("critics").where({ critic_id: criticId }).select();
}

module.exports = {
  read,
  update,
  list,
  getCritic,
};
