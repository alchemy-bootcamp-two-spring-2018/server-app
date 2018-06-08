const client = require('../db-client');

client.query(`
DROP TABLE IF EXISTS classifications;
DROP TABLE IF EXISTS fruits;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });