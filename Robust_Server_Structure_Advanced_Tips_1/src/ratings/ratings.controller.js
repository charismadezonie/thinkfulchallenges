const ratings = require("../data/ratings-data");

function ratingExists(req, res, next) {
  const { ratingId } = req.params;
  const foundRating = ratings.find((rating) => rating.id === Number(ratingId));
  if (foundRating) {
    res.locals.rating = foundRating;
    return next();
  }
  next({
    status: 404,
    message: `Rating id not found: ${ratingId}`,
  });
}

function read(req, res, next) {
  res.json({ data: res.locals.rating });
}

function list(req, res) {
  const { noteId } = req.params;
  const byResult = noteId ? (rating) => rating.noteId === noteId : () => true;
  res.json({ data: ratings.filter(byResult) });
}

module.exports = { read: [ratingExists, read], list };
