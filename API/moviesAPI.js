const axios = require('axios')

const moviesURL = 'https://api.tvmaze.com/shows'

const fetchMoviesData = async () => {
  try {
    const response = await axios.get(moviesURL)
    return response.data
  } catch (error) {
    console.error('Failed to fetch movies data', error)
    throw error
  }
}

module.exports = {
  fetchMoviesData,
}
