const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

// enter const

//path to file

//method
//fs file
//make js into array

//post

//send back objects

app.use((req, res) => {
    console.log(req.method, req.url, req.body.name);
    res.send({error: 'path not found' });
});

app.listen(3000, () => console.log('app running, please be running'));