// This script is used to populate the database from external sources.
// It should be run manually and NOT automatically during deployment.

const connectDB = require('./configs/db');
const { populateMembersCollection } = require('./BLL/membersBLL');
const { populateMoviesCollection } = require('./BLL/moviesBLL');

connectDB().then(async () => {
    await populateMembersCollection();
    await populateMoviesCollection();
    process.exit(0);
});
