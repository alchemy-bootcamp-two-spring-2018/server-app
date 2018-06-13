/* globals require */
//express app
const express = require('express');
const app = express();

//middleware(cors and json body read)
const cors = require('cors');
app.use(cors());
app.use(express.json());

//connect to database
const pg = require('pg');
const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/explore';
const client = new Client(dbUrl);
client.connect();

// routing
app.get('/api/meleeCharacters', (req, res) => {

  client.query(`
    SELECT m.id,
      m.name,
      s.id AS "stageId",
      s.name || ' (' || s.origin || ')' AS "stageName",
      universe,
      difficulty,
      walljump
    FROM meleeCharacters m
    JOIN stages s
    ON m.stageid = s.id
    ORDER BY m.name;
  `).then(result => {
    res.send(result.rows);
  });
});

app.post('/api/meleeCharacters', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO meleeCharacters (name, universe, difficulty, walljump, stageid)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `,
  [body.name, body.universe, body.difficulty, body.walljump, body.stageId]
  ).then(result => {
    //send object back
    res.send(result.rows[0]);
  });
});

app.put('/api/meleeCharacters/:id', (req, res) => {
  const body = req.body;

  client.query(`
    UPDATE meleeCharacters
    SET
      name = $1,
      universe = $2,
      difficulty = $3,
      walljump = $4,
      stageid = $5
    WHERE id = $6
    RETURNING *;
  `,
  [body.name, body.universe, body.difficulty, body.walljump, body.stageId, req.params.id]
  ).then(results => {
    res.send(results.rows[0]);
  });
});

app.delete('/api/meleeCharacters/:id', (req, res) => {
  console.log(req.params.id);
  //run client query
  client.query(`
    DELETE FROM meleeCharacters
    WHERE id=$1;  
  `,
  [req.params.id]
  ).then(() => {
    res.send({ remove: true });
  });
});

app.get('/api/stages', (req, res) => {

  client.query(`
    SELECT * FROM stages;
  `)
    .then(result => {
      res.send(result.rows);
    });
});

//run server
app.listen(3030, () => console.log('app running...'));