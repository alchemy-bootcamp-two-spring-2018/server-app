
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// connect to database
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/locations';
const client = new Client(databaseUrl);

client.connect();

//routes
app.get('/api/locations', (req, res) => {

  client.query(`
    SELECT * from locations;
  `).then(result => {
    res.send(result.rows);
  });

});

app.post('/api/locations', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO locations (name, description, neighborhood, power, rating)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `,
  [body.name, body.description, body.neighborhood, body.power, body.rating]
  ).then(result => {
  //send back object
    res.send(result.rows[0]);
  });

});

app.delete('/api/locations/:id', (req, res) => {
  console.log(req.params.id);

  client.query(`
    DELETE FROM locations WHERE id = 3;
    VALUES ($1)
    RETURNING *;
    
  `,
  [req.params.id]
  ).then(result => {
    
    res.send({ removed: true });
  });

});

//start "listening" (run) the app (server) 
app.listen(3000, () => console.log('app running....'));

