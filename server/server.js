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
    SELECT * FROM meleeCharacters;
  `).then(result => {
    res.send(result.rows)
  });
});

app.post('/api/meleeCharacters', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO meleeCharacters (name, universe, difficulty, walljump)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `,
  [body.name, body.universe, body.difficulty, body.walljump]
  ).then(result => {
    //send object back
    res.send(result.rows[0]);
  })
});

app.delete('/api/meleeCharacters/:id', (req, res) => {
  console.log(req.params.id);
  //run client query
  client.query(`
    DELETE FROM meleeCharacters
    WHERE id=$1
  `,
  [req.params.id]
  ).then(() => {
    res.send({ remove: true });
  });
});

//run server
app.listen(3030, () => console.log('app running...'));