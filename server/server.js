const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/subs';
const client = new Client(databaseUrl);
client.connect();

app.get('/api/subscriptions', (req, res) => {
  
  client.query(`
    SELECT * FROM subscriptions;
  `).then(result => {
    res.send(result.rows);
  });
});

app.post('/api/subscriptions', (req, res) => {
  const body = req.body;
  
  client.query(`
    INSERT INTO subscriptions (service, price, ads)
    VALUES ($1, $2, $3)
    RETURNING *;
  `,
  [body.service, body.price, body.ads]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.delete('/api/subscriptions/:id', (req, res) => {
  const id = req.params.id;
  
  client.query(`
    DELETE FROM subscriptions WHERE id = $1;
  `,
  [id]
  ).then(() => {
    res.send({ removed: req.params.id });
  });
});

app.listen(3000, () => console.log('app running...'));