const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/motorcycles';
const client = new Client(databaseUrl);

client.connect();

app.get('/api/motorcycles', (req, res) => {

  client.query(`
    select m.id,
    m.make,
    t.id as "mototypeId",
    t.type,
    model,
    year,
    color,
    available
    from motorcycles m
    join mototypes t
    on m.mototype_id = t.id
    order by m.make;
  `).then(result => {
    res.send(result.rows);
  });

});

app.post('/api/motorcycles', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO motorcycles (make, mototype_id, model, year, color, available)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `,
  [body.make, body.mototype_id, body.model, body.year, body.color, body.available]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.put('/api/motorcycles/:id', (req, res) => {
  const body = req.body;

  client.query(`
  update motorcycles
  set
    make = $1,
    mototype_id = $2,
    model = $3,
    year = $4,
    color = $5,
    available = $6
  where id = $7
  returning *;
  `,
  [body.make, body.mototype_id, body.model, body.year, body.color, body.available, req.params.id]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.delete('/api/motorcycles/', (req, res) => {

  client.query(`
    DELETE FROM motorcycles WHERE id = ($1);
  `,
  [req.body.id]
  ).then(() => {
    res.send({ removed: true });
  });
});

app.get('/api/mototypes', (req, res) => {

  client.query(`
  `)
    .then(result => {
      res.send(result.rows);
    });
});

app.listen(3000, () => console.log('Application is running...'));