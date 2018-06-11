//engage express
const express = require('express');
const app = express();

//make sure to use cors and read your json file
const cors = require('cors');
app.use(cors());
app.use(express.json());

//here is how you connect to database
//for further reading google pg.Client and read documentation
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:1234@localhost:5432/explore';
const client = new Client(databaseUrl);
client.connect(() => {
  console.log('SERVER.JS IS CONNECTED')
});


app.get('/api/rappers', (req, res) => {

  client.query(`
    SELECT rappers.id,
      name,
      born,
      role,
      numalbums,
      albums,
      aka,
      affiliates,
      dead
    FROM rappers
  `).then(result => {
    res.send(result.rows);
  });
});

app.post('/api/rappers', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO rappers (name, born, role, numalbums, albums, aka, affiliates, dead)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;
  `,
  [body.name, body.born, body.position, body.numalbums, body.albums, body.aka, body.affiliates, body.dead]
  ).then(result => {
    res.send(result.rows[0]);
  })

});

app.put('/api/rappers/:id', (req, res) => {
  const body = req.body;

  client.query(`
    update rappers
    set
      name = $1,
      born = $2,
      role = $3,
      numalbums = $4,
      albums = $5,
      aka = $6,
      affiliates = $7, 
      dead = $8
    where id = $9
    returning *;  
  `,
  [body.name, body.born, body.position, body.numalbums, body.albums, body.aka, body.affiliates, body.dead, req.params.id]
  ).then(result => {
    res.send(result.rows[0]);
  });
})

app.delete('/api/rappers/:id', (req, res) => {
  client.query(`
  DELETE FROM rappers WHERE id=$1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});

app.get('/api/positions', (req, res) => {

  client.query(`
    SELECT * FROM positions;
  `)
    .then(result => {
      res.send(result.rows);
    });
});


app.listen(3000, () => console.log('app is doing stuff'));