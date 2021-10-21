const reviewsService = require("./reviews.service");
const asyncErrorBoundary = require("../utils/errors/asyncErrorBoundary");

function read(req, res) {
  res.status(200).json({ data: res.locals.review });
}

async function list(req, res) {
  const reviews = await service.list();
  res.status(200).json({ data: reviews });
}

async function reviewExists(req, res, next) {
  const { reviewId } = req.params;
  const review = await reviewsService.read(reviewId);
  reviewId
    ? (res.locals.review = review[0])
    : next({ status: 404, message: `Review cannot be found.` });
  next();
}

function hasBody(req, res, next) {
  const { data: { score = null, content = null } = {} } = req.body;
  let updateObj = {};
  if (!score && !content)
    return next({ status: 400, message: "Missing score or content in body" });
  if (score) updateObj.score = score;
  if (content) updateObj.content = content;
  res.locals.update = updateObj;
  next();
}

async function update(req, res, next) {
  const { critic_id, review_id } = res.locals.review;
  const update = res.locals.update;
  await reviewsService.update(update, review_id);
  const updatedReview = await reviewsService.read(review_id);
  const critic = await reviewsService.getCritic(critic_id);
  res.status(200).json({ data: { ...updatedReview[0], critic: critic[0] } });
}

module.exports = {
  update: [
    asyncErrorBoundary(reviewExists),
    asyncErrorBoundary(update),
    hasBody,
  ],
  read: [asyncErrorBoundary(reviewExists), read],
  list: [asyncErrorBoundary(list)],
};
