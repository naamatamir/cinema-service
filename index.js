const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/db');
require('dotenv').config();

const { populateMembersCollection } = require('./BLL/membersBLL');
const { populateMoviesCollection } = require('./BLL/moviesBLL');

const moviesRouter = require('./routers/moviesRouter');
const membersRouter = require('./routers/membersRouter');
const subscriptionsRouter = require('./routers/subscriptionsRouter');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

//routers
app.use('/movies', moviesRouter);
app.use('/members', membersRouter);
app.use('/subscriptions', subscriptionsRouter);

connectDB().then(() => {
  populateMembersCollection();
  populateMoviesCollection();

  app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`);
  });
});
