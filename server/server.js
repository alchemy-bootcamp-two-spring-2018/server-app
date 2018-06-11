// basic express app
const express = require('express');
const app = express();

// middleware (cors and read json body)
const cors = require('cors');
app.use(cors());
app.use(express.json());

// connect to the database
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/cocktails';
const client = new Client(databaseUrl);
client.connect();

// routes
app.get('/api/cocktails', (req, res) => {

  client.query(`
  SELECT cocktails.id, name, alcohols.id as "alcoholID", alcohols.alcohol, ingredients,
  served, garnish, tried, image
  FROM cocktails
  JOIN alcohols
    ON cocktails.alcohol_id = alcohols.id;
  `).then(result => {
    res.send(result.rows);
  });
  
});

app.post('/api/cocktails', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO cocktails (name, alcohol_id, ingredients, served, garnish, tried, image)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *, alcohol_id as "alcoholID";
  `,
  [body.name, body.alcoholID, body.ingredients, body.served, body.garnish, body.tried, body.image]
  ).then(result => {
    // send back object
    res.send(result.rows[0]);
  });

});

app.put('/api/cocktails/:id', (req, res) => {
  const body = req.body;

  client.query(`
    UPDATE cocktails
    SET
      name = $1,
      alcohol_id=$2,
      ingredients = $3,
      served = $4,
      garnish = $5,
      tried = $6,
      image = $7
    WHERE id = $8
    RETURNING *, alcohol_id as "alcoholID";
  `,
  [body.name, body.alcoholID, body.ingredients, body.served, body.garnish, body.tried, body.image, req.params.id]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.delete('/api/cocktails/:id', (req, res) => {

  client.query(`
    DELETE FROM cocktails 
      WHERE id=$1;
    `,
  [req.params.id]).then(() => {
  
    res.send({ removed: true });
  });
  
});

app.get('/api/alcohols', (req, res) => {

  client.query(`
    SELECT * 
    FROM alcohols;
  `)
    .then(result => {
      res.send(result.rows);
    });
});

app.listen(3000, () => console.log('server running...'));