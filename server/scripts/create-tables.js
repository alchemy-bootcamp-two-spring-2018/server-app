const client = require('../db-client');

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS mototypes (
        id SERIAL PRIMARY KEY,
        type VARCHAR(256) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS motorcycles (
        id SERIAL PRIMARY KEY,
        year INTEGER,
        make VARCHAR(256),
        model VARCHAR(256),
        color VARCHAR(256),
        available BOOLEAN
      );
    `);
  })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });