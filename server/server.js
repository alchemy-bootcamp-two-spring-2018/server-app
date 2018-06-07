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
    SELECT bg.id, name, published, c.id as "categoryID", c.category, min_players as "minPlayers", max_players as "maxPlayers", avg_playing_time as "avgPlayingTime", description, owned
      FROM boardgames bg
      JOIN categories c
      ON bg.category_id = c.id
      ORDER BY name;
  `).then(result => {
    res.send(result.rows);
  });
});


app.post('/api/boardGames', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO boardgames (name, published, category_id, min_players, max_players, avg_playing_time, description, owned)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;
  `,
  [body.name, body.published, body.categoryID, body.minPlayers, body.maxPlayers, body.avgPlayingTime, body.description, body.owned]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.delete('/api/boardGames/:id', (req, res) => {
  const params = req.params;

  client.query(`
    DELETE FROM boardgames
      WHERE id = $1;
  `,
  [params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});



app.listen(3000);