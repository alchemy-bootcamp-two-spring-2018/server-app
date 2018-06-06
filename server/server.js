// import { read } from 'fs';


const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());

const sipList = require('./data/Shop.json');

// const fs = require('fs');

// const dataPath = 'data/siplist.json';

app.get('/api/coffee', (req, res) => {
// console.log(req.method, req.url, req.body.name);
res.send( sipList );
});

app.listen(3000, () => console.log('app is running...'));