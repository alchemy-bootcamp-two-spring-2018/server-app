
const Client = require('../db.Client');

client.query(`
    DROP TABLE IF EXISTS country;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });