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

const API_URL = '/api/boardGames';
const API_URL_ID = '/api/boardGames/:id';

app.get(API_URL, (req, res) => {
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


app.post(API_URL, (req, res) => {
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


app.put(API_URL_ID, (req, res) => {
  const body = req.body;

  client.query(`
    UPDATE boardgames
    SET
      name = $1,
      published = $2,
      category_id = $3,
      min_players = $4,
      max_players = $5,
      avg_playing_time = $6,
      description = $7,
      owned = $8
    WHERE id = $9
    returning *;
  `,
  [body.name, body.published, body.categoryID, body.minPlayers, body.maxPlayers, body.avgPlayingTime, body.description, body.owned, req.params.id]
  )
    .then(result => {
      res.send(result.rows[0]);
    });
});


app.delete(API_URL_ID, (req, res) => {
  client.query(`
    DELETE FROM boardgames
      WHERE id = $1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});


app.get('api/categories', (req, res) => {
  client.query(`
    SELECT * FROM categories;
  `)
    .then(result => {
      res.send(result.rows[0]);
    });
});


app.listen(3000);