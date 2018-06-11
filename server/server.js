
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/locations';
const client = new Client(databaseUrl);
client.connect();


app.get('/api/locations', (req, res) => {

  client.query(`
    SELECT id,
      name,
      id as "quadrantId",
      name,
      description,
      power,
      rating
    FROM locations 
    order by name;
    `).then(result => {
    res.send(result.rows);
  });
});

app.post('/api/locations', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO locations (name, description, quadrant_id, power, rating)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *, quadrant_id as "quadrantID";
  `,
  [body.name, body.description, body.quadrantId, body.power, body.rating]
  ).then(result => {
  //send back object
    res.send(result.rows[0]);
  });
});

app.put('/api/locations/:id', (req, res) => {
  const body = req.body;

  client.query(`
    update locations
    set
      name = $1,
      description = $2,
      quadrant_id = $3,
      power = $4,
      rating = $5
    WHERE id = $6
    returning *, quadrant_id as "quadrantId";
  `,
  [body.name, body.description, body.quadrantId, body.power, body.rating, req.params.id]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.delete('/api/locations/:id', (req, res) => {
  client.query(`
    DELETE FROM locations WHERE id =$1;  
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  }); 
});

app.get('/api/quadrants', (req, res) => {

  client.query(`
    select * from quadrants;
  `)
    .then(result => {
      res.send(result.rows);
    });
});

//start "listening" (run) the app (server) 
app.listen(3000, () => console.log('app running....'));

