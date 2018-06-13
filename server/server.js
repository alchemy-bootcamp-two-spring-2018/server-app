//this makes the express module required
const express = require('express');

//this makes an express app, note the lack of a 'new'
const app = express();

//this imports the cors "middleware" and enables our server to do CORS
const cors = require('cors');

//register the cors
app.use(cors());

//register the express "middleware" for converting the incoming 
//request boy to "de-serialized request.body property" <-- says marty (what the hell does this mean)
app.use(express.json());


// require our "mock" data
//eslint-disable-next-line
const games = require('./data/games');

//temp solution dont worry if you dont remember
const fs = require('fs');
// path to data file
const dataPath = 'data/games.json';


// app.<method>(<path>, handler)
app.get('/api/games', (req, res) => {
// fs file paths are relative to pwd (cwd) aka where you started node
  const raw = fs.readFileSync(dataPath);
  //make into a js array with objects
  const data = JSON.parse(raw);
  res.send(data);
});

app.post('/api/games', (req, res) => {
  console.log(req.method, req.url, req.body);
  const raw = fs.readFileSync(dataPath);
  //make into js array w/ objects
  const data = JSON.parse(raw);
  // push the new object into the array
  data.push(req.body);
  //save the file
  fs.writeFileSync(dataPath, JSON.stringify(data));
  //send back the object
  res.send(req.body);
});

app.use((req, res) => {
  console.log(req.method, req.url, req.body.name);
  res.send({ error: 'path not found' });
});


//this starts "listening" and (run) the app (server)
app.listen(3000, () => console.log('app running...'));