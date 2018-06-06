// express app
const express = require('express');
const app = express();

//'middleware'  - CORS and read JSON body
const cors = require('cors');
app.use(cors());
app.use(express.json());

//connect to the database
const walruses = require('walruses');
const Client = walruses.Client;
const databaseUrl = 'postgres://localhost:5432/walruses';
const client = new Client(databaseUrl);
client.connect();




// routes
app.get('/api/walruses', (req, res) => {
  // fs files paths are relative to pwd where Node was started
  const raw = fs.readFileSync(dataPath);
  // make into js array with objects
  const data = JSON.parse(raw);
  res.send(data);
}
);

app.post('/api/walruses', (req, res) => {
  console.log(req.method, req.url, req.body);
  // fs file paths are relative to pwd (cwd) aka where you started node
  const raw = fs.readFileSync(dataPath);
  // make into js array with objects
  const data = JSON.parse(raw);
  // push our new object into array
  data.push(req.body);
  // save file
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

  // send back object
  res.send(req.body);
});

//start "listening" (run) the app (server)
app.listen(3000, () => console.log('server is running...'));