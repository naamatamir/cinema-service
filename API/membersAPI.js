const axios = require('axios')

const usersURL = 'https://jsonplaceholder.typicode.com/users'

const fetchUsersData = async () => {
  try {
    const response = await axios.get(usersURL)
    return response.data
  } catch (error) {
    console.error('Failed to fetch users data', error)
    throw error
  }
}

module.exports = {
  fetchUsersData,
}
