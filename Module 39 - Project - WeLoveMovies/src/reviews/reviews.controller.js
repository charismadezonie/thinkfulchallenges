const reviewsService = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

function read(req, res) {
  const { review: data } = res.locals;
  res.json({ data });
}

function reviewExists(req, res, next) {
  reviewsService
    .read(req.params.reviewId)
    .then((review) => {
      if (review) {
        res.locals.review = review;
        return next();
      }
      next({ status: 404, message: `Review cannot be found.` });
    })
    .catch(next);
}

function update(req, res, next) {
  const updatedReview = {
    ...req.body.data,
    review_id: res.locals.review.review_id,
  };
  reviewsService
    .update(updatedReview)
    .then((data) => res.json({ data }))
    .catch(next);
}

module.exports = {
  update: [reviewExists, update],
  read,
};
