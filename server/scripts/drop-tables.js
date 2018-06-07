const client = require('../db-client');

client.connect()
  .then(() => {
    return client.query(`
      DROP TABLE IF EXISTS motorcycles;
      DROP TABLE IF EXISTS mototypes;
    `);
  })
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });