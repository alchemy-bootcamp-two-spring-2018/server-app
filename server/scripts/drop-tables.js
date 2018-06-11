const client = require('../db-client');

client.query(`
    DROP TABLE IF EXISTS comments;
    DROP TABLE IF EXISTS events;
    DROP TABLE IF EXISTS boardgames;
    DROP TABLE IF EXISTS categories;
`)
  .then(
    () => console.log('dropping tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });