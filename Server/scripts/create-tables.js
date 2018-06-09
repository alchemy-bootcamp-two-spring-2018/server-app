
const client = require('../db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS countries (
      id SERIAL PRIMARY KEY,
      name VARCHAR(40) NOT NULL,
    );
 
    CREATE TABLE IF NOT EXISTS amps (
      id SERIAL PRIMARY KEY,
      name VARCHAR(40),
      country_id VARCHAR(40) countries(id),
      introduced INTEGER,
      tubes BOOLEAN
    );
`)

  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });