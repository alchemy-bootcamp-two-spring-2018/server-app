//require the express module (installed via 'npm i express')
const express = require('express');

//make an express app. no 'new' keyword needed like in vue
const app = express();

//import cors "middleware" to enable our server to CORS
const cors = require('cors');
//register it
app.use(cors());

//register express "middleware" for converting incoming 
//request body to decentralized request.body property
app.use(express.json());

//require our "mock" data
const locations = require('./data/locations');

//temp solution to updating data...
const fs = require('fs');
//path to data file
const dataPath = 'data/locations.json';

//app.<method>(<path>, handler)
app.get('/api/locations', (req, res) => {
  //fs file paths are relative to PWD, aka where you started Node
  const raw = fs.readFileSync(dataPath);
  // //make into js array with objects
  const data = JSON.parse(raw);
  res.send(locations);
});

app.post('/api/locations', (req, res) => {
  console.log(req.method, req.url, req.body);
  //fs file paths are relative to pwd, aka where you started Node
  const raw = fs.readFileSync(dataPath);
  //make into js array with objects
  const data = JSON.parse(raw);
  //push our new object into the array
  data.push(req.body);
  //save file
  fs.writeFileSync(dataPath, JSON.stringify(data));

  //send back to object
  res.send(req.body);
});

app.use((req, res) => {
  console.log(req.method, req.url, req.body.name);
  res.send({ error: 'path not found' });
});

//start "listening" (run) the app (server) 
app.listen(3000, () => console.log('app running....'));

