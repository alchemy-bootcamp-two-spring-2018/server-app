//create a basic express app
const express = require('express');
const app = express();

//middleware"(cors and read json body)
const cors = require('cors');
app.use(cors());
app.use(express.json());


//connect to the database 'gameslist'
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/gameslist';
const client = new Client(databaseUrl);
client.connect();

//routes
app.get('/api/games', (req, res) => {
  client.query(`
    SELECT * FROM games;
  `).then(result => {
    res.send(result.rows);
  });
});

app.post('/api/games', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO games (name, system, year, completed)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `,
  [body.name, body.system, body.year, body.completed]
  ).then(result => {
    //send back object
    res.send(result.rows[0]);
  });
});


//this starts "listening" and (run) the app (server)
app.listen(3000, () => console.log('app running...'));