const express = require('express');

const app = express();

// const cors = require('cors');
// app.use(cors());

app.use(express.json());

//require our mock data
const glucoseLogs = require('./data/glucoseLogs');

//temp solution to update data - to be added

//app.get
app.get('/', (req, res) => {
  res.send('Yippee!');
});

//app.post


//still need to add something like req.body.name
app.use((req, res) => {
  console.log(req.method, req.url);
  res.send({ error: 'path not found' });
});

app.listen(3000, () => console.log('app is running...'));