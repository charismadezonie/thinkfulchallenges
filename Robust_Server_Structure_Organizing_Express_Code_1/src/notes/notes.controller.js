const notes = require("../data/notes-data");

function update(req, res) {
  const { noteId } = req.params;
  const foundNote = notes.find((note) => note.id === Number(noteId));

  const originalResult = foundNote.result;
  const { data: { result } = {} } = req.body;

  if (originalResult !== result) {
    foundNote.result = result;
  }

  res.json({ data: foundNote });
}

module.exports = {
  update,
};
