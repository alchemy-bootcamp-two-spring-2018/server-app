
const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/explore';
const client = new Client(databaseUrl);
client.connect();

// const amps = require('./data/amps');

// const fs = require('fs');

// const dataPath = ('data/amps.json');

app.get('/api/amps', (req, res) => {
  
  client.query(`
    SELECT * from amps;
  `).then(result => {
    res.send(result.rows);
  });

});

app.post('/api/amps', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO amps (name, country, introduced, tubes)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `,
  [body.name, body.country, body.introduced, body.description]
  ).then(result => {
    res.send(result.rows[0]);
  })

});

app.delete('/api/amps/:id', (req, res) => {
  console.log(req.params.id);

  res.send({ removed: true });
});

app.listen(3000, () => console.log('app running...'));