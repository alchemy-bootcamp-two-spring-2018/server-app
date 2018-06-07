const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/timetoclimb';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
    `);
  })
  .then(
    () => console.log('drop tables complete'),
    err => {
      client.end(err);
    });