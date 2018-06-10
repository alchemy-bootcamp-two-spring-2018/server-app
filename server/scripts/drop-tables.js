const client = require('../db-client');

client.query(`
      DROP TABLE IF EXISTS guitarists;
      DROP TABLE IF EXISTS guitars;
  `)
  .then(() => 
    console.log('droppin tables like I drop the ... beat'), err => console.log(err)
  )
  .then(() => {
    client.end();
  });