
const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());

const amps = require('./data/amps');

const fs = require('fs');

const dataPath = ('data/amps.json');

app.get('/api/amps', (req, res) => {
  

  const raw = fs.readFileSync(dataPath)

  const data = JSON.parse(raw);
  res.send(data);
});

app.post('/api/amps', (req, res) => {
  console.log(req.method, req.url, req.body);
  const raw = fs.readFileSync(dataPath)
  const data = JSON.parse(raw);
  data.push(req.body);
  fs.writeFileSync(dataPath, JSON.stringify(data));
  res.send(req.body);
})

app.listen(3000, () => console.log('app running...'));