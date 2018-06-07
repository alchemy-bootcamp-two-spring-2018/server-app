const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

//connect
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/motorcycles';
const client = new Client(databaseUrl);
client.connect();


app.get('/api/motorcycles', (req, res) => {

  client.query(`
  SELECT * from motorcycles;
  `).then(result => {
    res.send(result.rows);
  });

});

app.post('/api/motorcycles', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO motorcycles (year, make, model, color, available, delete)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `,
  [body.year, body.make, body.model, body.color, body.available, body.delete]
  ).then(result => {
    res.send(result.rows[0]);
  });

});

app.delete('/api/motorcycles/:id', (req, res) => {

  client.query(`
    DELETE FROM motorcycles WHERE id = ($1);
  `,
  [req.body.id]);

  res.send({ removed: true });
});

app.listen(3000, () => console.log('Application is running...'));