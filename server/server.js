const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// const client = require('db-client');

// connect to the database
const pg = require('pg');
const Client = pg.Client;
const DATABASE_URL = 'postgres://postgres:Bl0winBetty!@localhost:5432/guitarapp';
const client = new Client(DATABASE_URL);
client.connect();

app.get('/api/guitarists', (req, res) => {
  client.query(`
    SELECT * from guitarists;
  `).then(data => {
    console.log('data that we should be returning \n\n', data.rows[0]);
    res.send(data.rows);
  });
});

app.get('/api/guitars', (req, res) => {
  client.query(`
    SELECT * from guitars;
  `).then(data => {
    res.send(data.rows);
  });
});

app.post('/api/guitarists', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO guitarists (name, age, living, img_url, guitar_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `,
  [body.name, body.age, body.living, body.img_url, body.guitar_id])
    .then(data => {
      res.send(data.rows[0]);
    });
});

app.delete('/api/guitarists/:id', (req, res) => {
  console.log(req.params);

  client.query(`
    DELETE FROM guitarists WHERE id=($1);
  `,
  [req.params.id])
    .then(res.send({ removed: true }));
});

app.listen(1337, () => console.log('app is jogging...'));