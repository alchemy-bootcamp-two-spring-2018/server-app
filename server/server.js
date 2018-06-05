const express = require('express');

const app = express();

// const cors = require('cors');
// app.use(cors());

app.use(express.json());

const boardGames = require('./data/board-games');

app.get('/api/boardGames', (req, res) => {
  res.send(boardGames);
});

app.listen(3000);