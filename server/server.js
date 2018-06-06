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

  res.send(req.body);
});

app.listen(3000);