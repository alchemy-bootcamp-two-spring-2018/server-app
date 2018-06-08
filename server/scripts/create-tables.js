const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS days (
    id SERIAL PRIMARY KEY,
    name VARCHAR(10) NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS glucoselogs (
    id SERIAL PRIMARY KEY,
    date DATE,
    day_id INTEGER NOT NULL REFERENCES days(id),
    changeinsulin BOOLEAN,
    beforebreakfast INTEGER,
    afterbreakfast INTEGER,
    beforelunch INTEGER,
    afterlunch INTEGER,
    beforedinner INTEGER,
    afterdinner INTEGER
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });