const client = require('../db-client');

client.query(`
  DROP TABLE IF EXISTS locations;
  DROP TABLE IF EXISTS quadrants;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });