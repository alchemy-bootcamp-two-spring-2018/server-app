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
  client.query(`
    SELECT * from walruses;
    `).then(result => {
    res.send(result.rows);
  });
});

app.post('/api/walruses', (req, res) => {
  const body = req.body;
  client.query (`
    INSERT INTO walruses (name, weight, type, fictional, description)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `,
  [body.name, body.weight, body.type, body.fictional, body.description]
  ).then (result => {
    res.send(result.rows[0]);
  });
});



//start "listening" (run) the app (server)
app.listen(3000, () => console.log('server is running...'));