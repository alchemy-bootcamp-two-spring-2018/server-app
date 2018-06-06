const pg = require('pg');
const Client = pg.Client;
//come back and add path to a database here!!!!
const databaseUrl = 'postgres://localhost:5432/';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      DROP TABLE IF EXISTS glucoseLogs;
    `);
  })
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });