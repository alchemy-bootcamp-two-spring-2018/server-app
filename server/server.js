
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgresql://localhost:5432/timetoclimb';
const client = new Client(databaseUrl);
client.connect();

app.get('/api/climbingLocations/', (req, res) => {
  client.query(`
    SELECT * from climbinglocations;
  `).then(result => {
    res.send(result.rows);
  });
});


app.post('/api/climbingLocations', (req, res) => {
  const body = req.body;
  
  client.query(`
    INSERT INTO climbinglocations (name, image, location, elevation, yearRoundClimbing, description)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `, 
  [body.name, body.image, body.location, body.elevation, body.yearRoundClimbing, body.description]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.delete('/api/climbingLocations/:id', (req, res) => {
  console.log(req.params.id);
  const params = req.params;
  client.query(`
  DELETE FROM climbinglocations
  WHERE id = $1
  `,
  [params.id]
  ).then(() => {
    res.send({ removed: req.params.id });
  });
});

app.listen(3000);