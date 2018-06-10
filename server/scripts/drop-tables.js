const client = require('../db-client');

client.query(`
  DROP TABLE IF EXISTS meleeCharacters;
  DROP TABLE IF EXISTS stages;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
