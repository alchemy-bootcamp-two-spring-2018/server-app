const pg = require('pg');
const Client = pg.Client;
//come back and add path to a database here!!!!
const databaseUrl = 'postgres://localhost:5432/';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS neighborhoods (
        id SERIAL PRIMARY KEY,
        
      );
    `);
  });