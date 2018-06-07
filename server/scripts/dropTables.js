const pg = require('pg');
const Client = client.pg;
const dbUrl = 'postgres://localhost:5432/explore';
const client = new Client(dbUrl);

client.connect()
  .then(() => {
    return client.query(`
    DROP TABLE IF EXISTS meleeCharacters;
    `);
  })
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
