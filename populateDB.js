const connectDB = require('./configs/db');
const { populateMembersCollection } = require('./BLL/membersBLL');
const { populateMoviesCollection } = require('./BLL/moviesBLL');

connectDB().then(async () => {
    await populateMembersCollection();
    await populateMoviesCollection();
    process.exit(0);
});
