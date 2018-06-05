const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const motorcycles = require('./data/motorcycles');
// const fs = require('fs')
// const dataPath = 'data/motorcycles';

app.get('/api/motorcycles', (req, res) => {
  // const raw = fs.readFileSync(dataPath);
  // const data = JSON.parse(raw);
  res.send(motorcycles);
});

app.listen(3000);