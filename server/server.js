// require the express module (installed via `npm i express`)
const express = require('express');

// make an express app. no "new" keyword ¯\_(ツ)_/¯
const app = express();

// middleware (cors and read json body)
const cors = require('cors');
app.use(cors());
app.use(express.json());

// connect to the database
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:1234@localhost:5432/npr';
const client = new Client(databaseUrl);
client.connect();

// ROUTE:  get programs
app.get('/api/programs', (req, res) => {
  client.query(`
    SELECT * from programs;
  `).then(result => {
    res.send(result.rows);
  });
});

// ROUTE:  Post to programs
app.post('/api/programs', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO programs (title, host, audienceSize, yearStarted, daily, description)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `,
  [body.title, body.host, body.audienceSize, body.yearStarted, body.daily, body.description]
  ).then(result => {
    // send back object
    res.send(result.rows[0]);
  });

});

// ROUTE:  Delete a program
app.delete('/api/programs/:id', (req, res) => {
  client.query(`
  DELETE FROM programs WHERE id=$1
  `,
  [req.params.id]
  ).then(result => {
    res.send({ removed: true });
  });
});


// start "listening" (run) the app (server)
app.listen(3000, () => console.log('app running...'));