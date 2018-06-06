
const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.json());

const data = require('./data/climbingLocations.json');

const fs = require('fs');
const dataPath = './data/climbingLocations.json';

app.get('/api/climbingLocations', (req, res) => {
  res.send(data);
});

app.post('/api/climbingLocations', (req, res) => {
  console.log(req.method, req.url, req.body);
  const raw = fs.readFileSync(dataPath);
  const data = JSON.parse(raw);
  data.push(req.body);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2)); res.send(req.body);
});

app.use((req, res) => {
  console.log(req.method, req.url, req.body.name);
  res.send({ error: 'path not found' });
});

app.listen(3000);