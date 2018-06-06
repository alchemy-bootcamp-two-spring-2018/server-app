//engage express
const express = require('express');
const app = express();

//make sure to use cors and read your json file
const cors = require('cors');
app.use(cors());
app.use(express.json());

//here is how you connect to database
//for further reading google pg.Client and read documentation
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/explore';
const client = new Client(databaseUrl);
client.connect(() => {
  console.log('SERVER.JS IS CONNECTED')
});


app.get('/api/rappers', (req, res) => {

  client.query(`
  
  SELECT * from rappers;
  `).then(result => {
    res.send(result.rows);
  });
});

app.post('/api/rappers', (req, res) => {
  console.log(req.method, req.url, req.body);
  const raw = fs.readFileSync(dataPath)
  const data = JSON.parse(raw);
  data.push(req.body);
  fs.writeFileSync(dataPath, JSON.stringify(data));
  res.send(req.body);

});

app.use((req, res) => {
  console.log(req.method, req.url, req.body.name);
  res.send({ error: 'path not found ' });
});

app.listen(3000, () => console.log('app is doing stuff'));