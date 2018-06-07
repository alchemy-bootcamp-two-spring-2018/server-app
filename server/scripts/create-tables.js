const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS purposes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS subscriptions (
    id SERIAL PRIMARY KEY,
    service VARCHAR(256),
    price INTEGER,
    ads BOOLEAN
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });