// require the express module (installed via `npm i express`)
const express = require('express');

// make an express app. no "new" keyword ¯\_(ツ)_/¯
const app = express();

// import cors "middleware" to enable our server to do CORS
const cors = require('cors');
// register it
app.use(cors());

// register express "middleware" for converting incoming
// request body to deserialized request.body property
app.use(express.json());


const fs = require('fs');
// path to data file:
const dataPath = 'data/fruits.json';

// connect to the database
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/explore';
const client = new Client(databaseUrl);
client.connect();


// routes
app.get('/api/fruits', (req, res) => {

    client.query(`
      SELECT * from fruits;
    `).then(result => {
      res.send(result.rows);
    });
  
  });

app.post('/api/fruits', (req, res) => {
    const body = req.body;

    client.query(`
      INSERT INTO fruits (name, classification, color, skinEdible, calories)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `,
    [body.name, body.classification, body.color, body.skinEdible, body.calories]
    ).then(result => {
      // send back object
      res.send(result.rows[0]);
    })
  
  });

app.delete('/api/fruits/:id', (req, res) => {
  console.log(req.params.id);
  
  // implement client query
    
  res.send({ removed: true });
});
  
// start "listening" (run) the app (server)
app.listen(3000, () => console.log('app running...'));