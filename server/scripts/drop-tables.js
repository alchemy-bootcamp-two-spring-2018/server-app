const client = require('../db-client');

client.query(`
    DROP TABLE IF EXISTS fruits;
    DROP TABLE IF EXISTS classifications;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });