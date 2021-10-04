const ratings = require("../data/ratings-data");
const notes = require("../data/notes-data");

function hasParams(req, res, next) {
  if (Object.entries(req.params).length > 0) {
    const { noteId = null } = req.params;
    const { ratingId = null } = req.params;

    if (noteId) res.locals.noteId = noteId;
    if (ratingId) res.locals.ratingId = ratingId;
  }
  next();
}

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
  const { noteId = null } = res.locals;
  if (noteId) {
    const filteredRatings = ratings.filter((rating) => rating.noteId == noteId);
    res.status(200).json({ data: filteredRatings });
  } else {
    res.status(200).json({ data: ratings });
  }
}

module.exports = { read: [ratingExists, read], list: [hasParams, list] };
