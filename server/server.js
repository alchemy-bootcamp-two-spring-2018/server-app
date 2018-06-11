const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:Bl0winBetty!@localhost:5432/guitarapp';
const client = new Client(databaseUrl);
client.connect();


app.get('/api/guitarists', (req, res) => {
  client.query(`
    SELECT * from guitarists;
  `).then(data => {
    res.send(data.rows);
  });
});

app.post('/api/guitarists', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO guitarists (name, age, living, img_url)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `,
  [body.name, body.age, body.living, body.img_url])
    .then(data => {
      res.send(data.rows[0]);
    });
});

app.delete('/api/guitarists/', (req, res) => {
  // console.log(req);

  client.query(`
    DELETE FROM guitarists WHERE id=($1);
  `,
  [req.body.id]);

  res.send({ removed: true });
});

app.listen(1337, () => console.log('app is jogging...'));