const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());

const boardGames = require('./data/board-games');

console.log(boardGames);