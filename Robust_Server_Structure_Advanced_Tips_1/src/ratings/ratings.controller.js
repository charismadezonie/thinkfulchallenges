const ratings = require("../data/ratings-data");
const notes = require("../data/notes-data");

function list(req, res) {
  const { noteId = null } = res.locals;
  if (noteId) {
    const filteredRatings = ratings.filter((rating) => rating.noteId == noteId);
    res.status(200).json({ data: filteredRatings });
  } else {
    res.status(200).json({ data: ratings });
  }
}

module.exports = {
  list,
  read,
};
