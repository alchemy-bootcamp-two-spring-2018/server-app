const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

const data = require('./data/board-games.json');

const fs = require('fs');
const dataPath = 'data/board-games.json';

app.get('/api/boardGames', (req, res) => {
  res.send(data);
});

app.post('/api/boardGames', (req, res) => {
  console.log('posting');
  const raw = fs.readFileSync(dataPath);
  const data = JSON.parse(raw);
  data.push(req.body);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  res.send(req.body);
});

app.listen(3000);