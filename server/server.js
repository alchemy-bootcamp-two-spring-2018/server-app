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


// GET one gutiarist
app.get('/api/guitarists/:id', (req, res) => {
  client.query(`
    SELECT
      g.id,
      age,
      name,
      living,
      gs.id AS "guitarId",
      gs.brand || ' (' || gs.type || ') ' as "guitarBrand",
      img_url
    FROM guitarists g
    JOIN guitars gs
    ON g.guitar_id = gs.id
    WHERE g.id=($1);
    `, [req.params.id])
    .then(data => {
      res.send(data.rows[0]);
    });
});

// GET all guitarists
app.get('/api/guitarists', (req, res) => {
  client.query(`
    SELECT
      g.id,
      age,
      name,
      living,
      gs.id AS "guitarId",
      gs.brand || ' (' || gs.type || ') ' as "guitarBrand",
      img_url
    FROM guitarists g
    JOIN guitars gs
    ON g.guitar_id = gs.id;
  `).then(data => {
    res.send(data.rows);
  });
});

// GET all guitars
app.get('/api/guitars', (req, res) => {
  client.query(`
    SELECT * FROM guitars;
  `).then(data => {
    res.send(data.rows);
  });
});

// POST new guitarist
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

app.put('/api/guitarists/:id', (req, res) => {
  const g = req.body;
  client.query(`
    UPDATE guitarists
    SET
      name=$1,
      age=$2,
      living=$3,
      img_url=$4,
      guitar_id=$5
    WHERE id=($6);
  `, [g.name, g.age, g.living, g.img_url, g.guitar_id, req.params.id])
    .then(res.send({ updated: true }));
});

// DELETE a guitrist
app.delete('/api/guitarists/:id', (req, res) => {
  client.query(`
    DELETE FROM guitarists WHERE id=($1);
  `,
  [req.params.id])
    .then(res.send({ removed: true }));
});

app.listen(1337, () => console.log('app is jogging...'));