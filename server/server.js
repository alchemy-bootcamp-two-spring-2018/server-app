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

const API_URL = '/api/events';
const API_URL_ID = '/api/events/:id';
const API_COMMENTS_URL = '/api/comments';

app.get(API_URL, (req, res) => {
  client.query(`
    SELECT
      id,
      name,
      date,
      time,
      game_id as "gameID",
      guests_allowed as "guestsAllowed",
      message
    FROM events
    ORDER BY date DESC;
  `).then(result => {
    res.send(result.rows);
  });
});


app.post(API_URL, (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO events (
      name,
      date,
      time,
      game_id,
      guests_allowed,
      message)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *, game_id as "gameID", guests_allowed as "guestsAllowed";
  `,
  [
    body.name,
    body.date,
    body.time,
    body.gameID,
    body.guestsAllowed,
    body.message
  ])
    .then(result => {
      res.send(result.rows[0]);
    });
});


app.put(API_URL_ID, (req, res) => {
  const body = req.body;

  client.query(`
    UPDATE events
    SET
      name = $1,
      date = $2,
      time = $3,
      game_id = $4,
      guests_allowed = $5,
      message = $6
    WHERE id = $7
    RETURNING *, game_id as "gameID", guests_allowed as "guestsAllowed";
  `,
  [
    body.name,
    body.date,
    body.time,
    body.gameID,
    body.guestsAllowed,
    body.message,
    req.params.id
  ])
    .then(result => {
      res.send(result.rows[0]);
    });
});


app.delete(API_URL_ID, (req, res) => {
  client.query(`
    DELETE FROM events
      WHERE id = $1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});


app.get('/api/boardgames', (req, res) => {
  client.query(`
    SELECT
      id,
      name,
      category_id as "categoryID",
      players,
      avg_playing_time as "avgPlayingTime",
      description
    FROM boardgames;
  `)
    .then(result => {
      res.send(result.rows);
    });
});

app.get('/api/categories', (req, res) => {
  client.query(`
    SELECT * FROM categories;
  `)
    .then(result => {
      res.send(result.rows);
    });
});


app.get(API_COMMENTS_URL, (req, res) => {
  client.query(`
    SELECT
      id,
      event_id as "eventID",
      username,
      comment
    FROM comments
    where event_id = $1;
  `,
  [req.query.eventID]
  )
    .then(result => {
      res.send(result.rows);
    });
});




app.listen(3000);