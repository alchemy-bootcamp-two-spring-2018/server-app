const DATABASE_URL = 'postgres://localhost:5432/explore';
const pg = require('pg');
const CLIENT = pg.Client;

const client = new Client(DATABASE_URL);
client.connect()
  .then(() => console.log('connected to db', DATABASE_URL))
  .catch(err => console.error('connection error'));

client.on('error', err => {
  console.error('\n**** DATABASE ERROR ****\n\n', err);
});

module.exports = clients;