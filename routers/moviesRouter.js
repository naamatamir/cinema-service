const express = require('express');
const moviesBLL = require('../BLL/moviesBLL');

const moviesRouter = express.Router();

//Entry Point 'http://localhost:8000/movies'

moviesRouter.route('/').get(async (req, res) => {
  try {
    const movies = await moviesBLL.getAllMovies();
    res.json(movies);
  } catch (error) {
    res.json(error);
  }
});

moviesRouter.route('/:id').get(async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await moviesBLL.getMovieById(id);
    res.json(movie);
  } catch (error) {
    res.json(error);
  }
});

moviesRouter.route('/').post(async (req, res) => {
  try {
    const obj = req.body;
    const result = await moviesBLL.addMovie(obj);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

moviesRouter.route('/:id').patch(async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await moviesBLL.updateMovie(id, obj);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

moviesRouter.route('/:id').delete(async (req, res) => {
  try {
    const { id } = req.params;
    const result = await moviesBLL.deleteMovie(id);
console.log('deleted movie: ', id);

    res.json(result);
  } catch (error) {
    res.json(`the error is: ${error}`);
  }
});

module.exports = moviesRouter;
