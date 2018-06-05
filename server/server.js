
const express = require('express');

const app = express();

app.use(express.json());

const climbingLocations = require('./data/climbingLocations.json');

app.get('/api/climbingLocations', (req, res) => {
  res.send(climbingLocations);
});


app.listen(3000);

