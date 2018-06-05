const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

const boardGames = require('./data/board-games');

const fs = require('fs');
const dataPath = 'data/board-games.json';

app.get('/api/boardGames', (req, res) => {
  const raw = fs.readFileSync(dataPath);
  const data = JSON.parse(raw);
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
app.use((req, res) => {
  console.log(req.method, req.url, req.body.name);
  res.send({ error: 'path not found' });
});
app.listen(3000);