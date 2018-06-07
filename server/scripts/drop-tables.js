const client = require('../db-client');

client.query(`
  DROP TABLE IF EXISTS subscriptions;
  DROP TABLE IF EXISTS purposes;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });