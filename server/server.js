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
    select id,
      name,
      purpose_id as "purposeId",
      price,
      ads
    from subscriptions
    order by name;
  `).then(result => {
    res.send(result.rows);
  });
});

app.post('/api/subscriptions', (req, res) => {
  const body = req.body;
  
  client.query(`
    insert into subscriptions (name, purpose_id, price, ads)
    values ($1, $2, $3, $4)
    returning *, purpose_id as "purposeId";
  `,
  [body.name, body.purposeId, body.price, body.ads]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.put('/api/subscriptions/:id', (req, res) => {
  const body = req.body;

  client.query(`
    update subscriptions
    set
      name = $1,
      purpose_id = $2,
      price = $3,
      ads = $4
    where id = $5
    returning *, purpose_id as "purposeId";
  `,
  [body.name, body.purposeId, body.price, body.ads, req.params.id]
  ).then(result => {
    res.send(result.rows);
  });
});

app.delete('/api/subscriptions/:id', (req, res) => {
  client.query(`
    delete from subscriptions where id = $1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});

app.get('/api/purposes', (req, res) => {

  client.query(`
    select * from purposes;
  `)
    .then(result => {
      res.send(result.rows);
    });
});

app.listen(3000, () => console.log('app running...'));