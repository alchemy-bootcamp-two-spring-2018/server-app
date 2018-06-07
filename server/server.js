const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/bg';
const client = new Client(databaseUrl);
client.connect();


app.get('/api/boardGames', (req, res) => {
  client.query(`
    SELECT * from boardgames;
  `).then(result => {
    res.send(result.rows);
  });
});

app.post('/api/boardGames', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO boardgames (name, published, minPlayers, maxPlayers, avgPlayingTime, description, owned)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `,
  [body.name, body.published, body.minPlayers, body.maxPlayers, body.avgPlayingTime, body.description, body.owned]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.delete('/api/boardGames/:id', (req, res) => {
  console.log(req.params.id);
  const params = req.params;

  client.query(`
    DELETE FROM boardgames
      WHERE id = $1
  `,
  [params.id]
  ).then(() => {
    res.send({ removed: params.id });
  });
});



app.listen(3000);