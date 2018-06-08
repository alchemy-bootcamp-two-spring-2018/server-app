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
    SELECT g.id,
    g.name,
    s.id as "systemId",
    s.name as "systemName",
    year,
    completed
    FROM games g
    JOIN systems s
    ON g.system_id = s.id
    order by year;
  `).then(result => {
    res.send(result.rows);
  });
});

app.get('/api/systems', (req, res) => {

  client.query(`
    SELECT * FROM systems;
  `)
    .then(result => {
      res.send(result.rows);
    });
});

app.post('/api/games', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO games (name, system_id, year, completed)
    VALUES ($1, $2, $3, $4)
    RETURNING *, system_id as "systemId";
  `,
  [body.name, body.systemId, body.year, body.completed]
  ).then(result => {
    //send back object
    res.send(result.rows[0]);
  });
});

app.put('/api/games/:id', (req, res) => {
  const body = req.body;

  client.query(`
    UPDATE games
    SET
      name = $1,
      system_id = $2,
      year = $3,
      completed = $4
    WHERE id = $5
    RETURNING *, system_id as "systemId";
  `,
  [body.name, body.systemId, body.year, body.completed, req.params.id]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.delete('/api/games/:id', (req, res) => {

  client.query(`
    DELETE FROM games
    WHERE id = $1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});

//this starts "listening" and (run) the app (server)
app.listen(3000, () => console.log('app running...'));