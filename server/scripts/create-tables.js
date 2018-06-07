const client = require('../db-client');

client.query(`
      CREATE TABLE IF NOT EXISTS mototypes (
        id SERIAL PRIMARY KEY,
        type VARCHAR(256) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS motorcycles (
        id SERIAL PRIMARY KEY,
        make VARCHAR(256),
        mototype_id INTEGER NOT NULL REFERENCES mototypes(id),
        model VARCHAR(256),
        year INTEGER,
        color VARCHAR(256),
        available BOOLEAN
      );
    `)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });