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
    insert into subscriptions (name, price, ads)
    VALUES ($1, $2, $3)
    RETURNING *;
  `,
  [body.name, body.price, body.ads]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.delete('/api/subscriptions/:id', (req, res) => {
  const params = req.params;

  client.query(`
    DELETE FROM subscriptions 
    WHERE id = $1;
  `,
  [params.id]
  ).then(() => {
    res.send({ message: 'subscription deleted successfully!' });
  });
});

app.get('/api/purposes', (req, res) => {

  client.query(`
    select * from purposes;
  `).then(result => {
    res.send(result.rows);
  });
});

app.listen(3000, () => console.log('app running...'));