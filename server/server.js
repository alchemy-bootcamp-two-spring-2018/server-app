const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

/* eslint-disable-next-line */
const motorcycles = require('./data/motorcycles');
const fs = require('fs');
const dataPath = 'data/motorcycles.json';

app.get('/api/motorcycles', (req, res) => {
  const raw = fs.readFileSync(dataPath);
  const data = JSON.parse(raw);
  res.send(data);
});

app.post('/api/motorcycles', (req, res) => {
  console.log(req.method, req.url, req.body);
  const raw = fs.readFileSync(dataPath);
  const data = JSON.parse(raw);
  data.push(req.body);
  fs.writeFileSync(dataPath, JSON.stringify(data));
  res.send(req.body);
});

app.listen(3000);