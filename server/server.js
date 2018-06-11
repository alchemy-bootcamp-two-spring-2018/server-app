
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
    SELECT id,
    name,
    climbingstyle_id as "climbingstyleID",
    elevation,
    location,
    yearroundclimbing, 
    description
   FROM climbinglocations ;
  `).then(result => {
    res.send(result.rows);
  });
});

app.post('/api/climbingLocations', (req, res) => {
  const body = req.body;
  
  client.query(`
    INSERT INTO climbinglocations (name, climbingstyle_id, location, elevation, yearRoundClimbing, description)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *, climbingstyle_id as "climbingstyleID" ;
  `, 
  [body.name, body.climbingstyleID, body.location, body.elevation, body.yearRoundClimbing, body.description]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.put('/api/climbingLocations/:id', (req, res) => {
  const body = req.body;
  
  client.query(`
    UPDATE climbinglocations
    SET
      name = $1,
      climbingstyle_id = $2,
      location = $3,
      elevation = $4,
      yearroundclimbing = $5,
      description = $6
      WHERE id = $7
      RETURNING *, climbingstyle_id as "climbingstyleID";
      `,
  [body.name, body.climbingstyleID, body.location, body.elevation, body.yearroundclimbing, body.description, body.id]
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
    res.send({ removed: true });
  });
});

app.get('/api/climbingstyles', (req, res) => {
  client.query(`
  select * from climbingstyles;
  `)
    .then(result => {
      res.send(result.rows);
    });
});

app.listen(3000, () => console.log('server is running...'));