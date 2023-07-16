const Movie = require('../models/movieModel')
const { fetchMoviesData } = require('../API/moviesAPI')

const populateMoviesCollection = async () => {
  try {
    const apiData = await fetchMoviesData();
    const filteredData = apiData.map(({ name, genres, image, premiered }) => ({ name, genres, image: image.medium, premiered }));

    await Movie.bulkWrite(
      filteredData.map((fd) => ({
        updateOne: {
          filter: { name: fd.name },
          update: fd,
          upsert: true,
        },
      }))
    );

    console.log('Movies collection populated');
  } catch (error) {
    console.error('Failed to populate movies collection', error);
    throw error;
  }
};

const getAllMovies = () => {
  try {
    return Movie.find({})
  } catch (error) {
    throw error
  }
}

const getMovieById = (id) => {
  try {
    return Movie.findById({ _id: id })
  } catch (error) {
    throw error
  }
}

const addMovie = async (obj) => {
  try {
    const movie = new Movie(obj)
    await movie.save()
    return 'created new movie'
  } catch (error) {
    throw error
  }
}

const updateMovie = async (id, obj) => {
  try {
    await Movie.findByIdAndUpdate(id, obj)
    return `updated movie with id: ${id}`
  } catch (error) {
    throw error
  }
}

const deleteMovie = async (id) => {
  try {
    await Movie.findByIdAndDelete(id)
    return `deleted movie with id: ${id}`
  } catch (error) {
    throw error
  }
}

module.exports = {
  populateMoviesCollection,
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
}
