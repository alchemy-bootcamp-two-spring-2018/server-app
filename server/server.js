//require the express module (installed via 'npm i express')
const express = require('express');

//make an express app. no "new" keyword...
const app = express();

//import cors "middleware" to enable our server to do CORS
const cors = require('cors');
app.use(cors());

//register express "middleware" for converting incoming
//request body to deserialized request.body property
app.use(express.json());

//require our "mock" data
const glucoseLogs = require('./data/glucoseLogs');

//temp solution to update data... 
const fs = require('fs');
//path to data file:
const dataPath = 'data/glucoseLogs.json';

//recipe: app.<method>(<path>, handler)
//app.get
app.get('/api/glucoseLogs', (req, res) => {
  //fs file paths are relative to pwd (cwd) aka where you started node
  const raw = fs.readFileSync(dataPath);
  //make into js array with objects
  const data = JSON.parse(raw);
  res.send(data);
});

//app.post
app.post('/api/glucoseLogs', (req, res) => {
  console.log(req.method, req.url, req.body);
  //fs file paths are relative to pwd (cwd) aka where you started node
  const raw = fs.readFileSync(dataPath);
  //make into js array with objects
  const data = JSON.parse(raw);
  //push our new object into array
  data.push(req.body);
  //save file
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

  //send back object
  res.send(req.body);
});

app.use((req, res) => {
  console.log(req.method, req.url, req.body.day);
  res.send({ error: 'path not found' });
});

//start "listening" (run) the app (server)
app.listen(3000, () => console.log('app is running...'));