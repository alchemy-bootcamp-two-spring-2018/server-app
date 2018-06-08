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

// ROUTE:  get genres
app.get('/api/genres', (req, res) => {
  client.query(`
    SELECT * from genres;
  `).then(result => {
    res.send(result.rows);
  });
});

// ROUTE:  get programs
app.get('/api/programs', (req, res) => {
  client.query(`
    SELECT programs.id AS "programId",
    programs.title,
    programs.host,
    programs.audiencesize AS "audienceSize",
    programs.yearstarted AS "yearStarted",
    programs.daily,
    programs.genre_id AS "genreId",
    genres.genre,
    programs.description
    FROM programs JOIN genres
    ON programs.genre_id = genres.id
    ORDER BY programs.title;
  `).then(result => {
    res.send(result.rows);
  });
});

// ROUTE:  Post to programs
app.post('/api/programs', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO programs (title, host, audiencesize, yearstarted, daily, genre_id, description)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `,
  [body.title, body.host, body.audienceSize, body.yearStarted, body.daily, body.genreId, body.description]
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
  ).then(() => {
    res.send({ removed: true });
  });
}); 


// start "listening" (run) the app (server)
app.listen(3000, () => console.log('app running...'));