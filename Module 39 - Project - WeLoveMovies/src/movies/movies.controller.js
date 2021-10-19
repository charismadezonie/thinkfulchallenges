const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
  const { is_showing } = req.query;
  const data = is_showing
    ? await await moviesService.listNowPlaying()
    : await moviesService.list();

  res.status(200).json({ data: data });
}

function read(req, res) {
  const { movie: data } = res.locals;
  res.json({ data });
}

function movieExists(req, res, next) {
  moviesService
    .read(req.params.movieId)
    .then((movie) => {
      if (movie) {
        res.locals.movie = movie;
        return next();
      }
      next({ status: 404, message: `Movie cannot be found.` });
    })
    .catch(next);
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [movieExists, read],
};
