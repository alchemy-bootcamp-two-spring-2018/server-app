const client = require('../db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS stages (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256) NOT NULL,
      origin VARCHAR(256) NOT NULL
    );

      CREATE TABLE IF NOT EXISTS meleeCharacters (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256),
        universe VARCHAR(256),
        difficulty INTEGER,
        walljump BOOLEAN,
        stageid INTEGER NOT NULL REFERENCES stages(id)
      );
    `)
  .then(
    () => console.log('Tables creation complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });