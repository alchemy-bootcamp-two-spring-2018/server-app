const client = require('../db-client');

client.query(`
  DROP TABLE IF EXISTS glucoselogs;

  DROP TABLE IF EXISTS days;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });