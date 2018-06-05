const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const guitarists = require('./data/guitarists');

const fs = require('fs');

const dataPath = 'data/guitarists.json';

// Not shore what this /api/ business is about
app.get('/data/guitarists/', (req, res) => {
  console.log('req', req, 'res', res);
  // const raw = fs.readFileSync(dataPath)
  // const data = JSON.parse(raw);
  // res.send(data);
});

app.post('/api/guitarists', (req, res) => {
  console.log(req.method, req.url, req.body);
  const raw = fs.readFileSync(dataPath)
  const data = JSON.parse(raw);
  data.push(req.body);
  fs.writeFileSync(dataPath, JSON.stringify(data));
  res.send(req.body);
});

app.use((req, res) => {
  console.log(req.method, req.url, req.body.name);
  res.send({ error: 'go home, you\'re drunk' });
});

app.listen(1337, () => console.log('app is jogging...'));