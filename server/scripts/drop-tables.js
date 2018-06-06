const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhose:5432/guitarapp';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      DROP TABLE IF EXISTS guitarists;
    `);
  })
  .then(() => 
    console.log('droppin tables like I drop the ... beat'), err => console.log(err)
  )
  .then(() => {
    client.end();
  });