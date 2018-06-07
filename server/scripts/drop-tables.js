const client = require('../db-client');

client.query(`
  DROP TABLE IF EXISTS climbinglocations,
  DROP TABLE IF EXISTS climbingstyles
  `)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
