const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const podcasts = require('./data/podcasts');
const fs = require('fs');
const dataPath = 'data/podcasts.json';

//method(<path><handler>)
app.get('/api/podcasts', (req, res) => {
    const raw = fs.readFileSync(dataPath);
    const data = JSON.parse(raw);
    res.send(data);
});

app.post('/api/podcasts', (req, res) => {
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

app.listen(3000, () => console.log('app running, please be running'));