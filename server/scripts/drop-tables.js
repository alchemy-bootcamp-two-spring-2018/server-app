const client = require('../db-client');

client.query(`
    DROP TABLE IF EXISTS podcasts;
    DROP TABLE IF EXISTS formats;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
  