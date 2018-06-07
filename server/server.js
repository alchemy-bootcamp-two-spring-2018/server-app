// import { read } from 'fs';


const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());

// const sipList = require('./data/shop.json');

const fs = require('fs');

const dataPath = './data/shop.json';

app.get('/api/shops', (req, res) => {

  const raw = fs.readFileSync(dataPath);
  const data = JSON.parse(raw);
  res.send(data);

});

// app.use((req, res) => {
//   console.log(req.method, req.url, req.body.name);
//   res.send({ error: 'path not found' });
// });

app.listen(3000, () => console.log('app is running...'));