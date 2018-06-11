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
  SELECT * from cocktails;
  `).then(result => {
    res.send(result.rows);
  });
  
});

app.post('/api/cocktails', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO cocktails (name, alcohol, ingredients, served, garnish, tried, image)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `,
  [body.name, body.alcohol, body.ingredients, body.served, body.garnish, body.tried, body.image]
  ).then(result => {
    // send back object
    res.send(result.rows[0]);
  });

});

app.delete('/api/cocktails/:id', (req, res) => {
  const params = req.params.id;
  
  client.query(`
    DELETE FROM cocktails 
      WHERE id=$1;
    `,
  [params]).then(() => {
  
    res.send({ removed: true });
  });
  
});

app.listen(3000, () => console.log('server running...'));