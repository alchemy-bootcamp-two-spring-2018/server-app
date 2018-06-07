const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// My app runs without this..?
// const guitarists = require('./data/guitarists');

const fs = require('fs');

const dataPath = 'data/guitarists.json';

app.get('/data/guitarists', (req, res) => {
  // console.log('req', req, 'res', res);
  const raw = fs.readFileSync(dataPath);
  const data = JSON.parse(raw);
  res.send(data);
});

app.post('/data/guitarists', (req, res) => {
  console.log(req.method, req.url, req.body);
  const raw = fs.readFileSync(dataPath);
  const data = JSON.parse(raw);
  data.push(req.body);
  fs.writeFileSync(dataPath, JSON.stringify(data));
  res.send(req.body);
});

app.listen(1337, () => console.log('app is jogging...'));