const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/glucoselogs';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      DROP TABLE IF EXISTS glucoselogs;
    `);
  })
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });