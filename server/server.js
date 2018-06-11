const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());

const rappers = require('./data/rappers');

const fs = require('fs');

const dataPath = 'data/rappers.json';

app.get('/api/rappers', (req, res) => {
  const raw = fs.readFileSync(dataPath);
  const data = JSON.parse(raw);
  res.send(data);
});

app.post('/api/rappers', (req, res) => {
  console.log(req.method, req.url, req.body);
  const raw = fs.readFileSync(dataPath)
  const data = JSON.parse(raw);
  data.push(req.body);
  fs.writeFileSync(dataPath, JSON.stringify(data));
  res.send(req.body);

});

app.use((req, res) => {
  console.log(req.method, req.url, req.body.name);
  res.send({ error: 'path not found ' });
});

app.listen(3000, () => console.log('app is doing stuff'));