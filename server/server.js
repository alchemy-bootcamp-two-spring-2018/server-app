// import { read } from 'fs';


const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());

// const sipList = require('./data/shop.json');

// eslint-disable-next-line
const shops = require('./data/shop');

const fs = require('fs');

const dataPath = 'data/shop.json';

app.get('/api/shops', (req, res) => {

  const raw = fs.readFileSync(dataPath);
  const data = JSON.parse(raw);
  res.send(data);
});

app.post('/api/shops', (req, res) => {
  console.log(req.method, req.url, req.body);

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

app.listen(3000, () => console.log('app is running...'));