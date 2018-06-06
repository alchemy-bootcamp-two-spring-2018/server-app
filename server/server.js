const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

// eslint-disable-next-line
const subscriptions = require('./data/subscriptions.json');

const fs = require('fs');
const dataPath = 'data/subscriptions.json';

app.get('/api/subscriptions', (req, res) => {
  const raw = fs.readFileSync(dataPath);
  const data = JSON.parse(raw);
  res.send(data);
});

app.post('/api/subscriptions', (req, res) => {
  console.log(req.method, req.url, req.body);
  const raw = fs.readFileSync(dataPath);
  const data = JSON.parse(raw);
  data.push(req.body);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  res.send(req.body);
});

app.listen(3000, () => console.log('app running...'));