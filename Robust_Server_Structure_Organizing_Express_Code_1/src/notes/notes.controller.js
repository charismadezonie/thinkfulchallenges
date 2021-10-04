const notes = require("../data/notes-data");

const noteExists = (req, res, next) => {
  const noteId = Number(req.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  if (foundNote) {
    return next();
  } else {
    return next({
      status: 404,
      message: `Note id not found: ${req.params.noteId}`,
    });
  }
};

const hasText = (req, res, next) => {
  const { data: { text } = {} } = req.body;
  if (text) {
    return next();
  }
  return next({ status: 400, message: "A 'text' property is required." });
};

function create(req, res, next) {
  const { data: { text } = {} } = req.body;

  const newNote = {
    id: notes.length + 1, // Assign the next ID
    text,
  };
  notes.push(newNote);
  res.status(201).json({ data: newNote });
}

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

function destroy(req, res, next) {
  const { noteId } = req.params;
  const index = notes.findIndex((note) => note.id === Number(noteId));
  notes.splice(index, 1);

  next({
    status: 204,
    message: `Note with ID ${req.params.noteId} has been deleted`,
  });
}

function list(req, res) {
  res.json({ data: notes });
}

module.exports = {
  update: [noteExists, update],
  create: [hasText, create],
  destroy: [noteExists, destroy],
  list,
};
