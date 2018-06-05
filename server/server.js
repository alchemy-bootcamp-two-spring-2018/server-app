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







//this starts "listening" and (run) the app (server)
app.listen(3000, () => console.log('app running...'));