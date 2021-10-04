const ratings = require("../data/ratings-data");

function read(req, res, next) {
  res.json({ data: res.locals.rating });
}

function list(req, res) {
  const { noteId } = req.params;
  const byResult = noteId ? (rating) => rating.noteId === noteId : () => true;
  res.json({ data: ratings.filter(byResult) });
}

module.exports = { read, list };
