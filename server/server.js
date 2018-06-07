const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());

//const cocktails = require('./data/cocktails');

const fs = require('fs');

const dataPath = 'data/cocktails.json';

app.get('/api/cocktails', (req, res) => {

  const raw = fs.readFileSync(dataPath);
  const data = JSON.parse(raw);
  res.send(data); 
  
});

app.post('/api/cocktails', (req, res) => {
  
  const raw = fs.readFileSync(dataPath);
  const data = JSON.parse(raw);
  data.push(req.body);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  res.send(req.body);

});

app.listen(3000, () => console.log('server running...'));