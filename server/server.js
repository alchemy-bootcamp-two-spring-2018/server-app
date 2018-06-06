const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/guitaristapp';
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
    INSERT INTO guitarists (name, living, img_url)
    VALUES ($1, $2, $3)
    RETURNING *;
  `,
  [body.name, body.living, body.img_url])
    .then(data => {
      res.send(data.rows[0]);
    });
});

app.delete('/appi/guitarists/:id', (req, res) => {
  console.log(req.params.id);

  client.query(`
    DROP TABLE guitarists;
  `);

  res.send({ removed: true });
});

app.listen(1337, () => console.log('app is jogging...'));