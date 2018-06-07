const client = require('../db-client');
const mototypes = require('./mototypes.json');

Promise.all(
  mototypes.map(mototypes => {
    return client.query(`
    INSERT INTO quadrants (type)
    VALUES ($1);
    `,
    [mototypes.type]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.log(err)
  )
  .then(() => client.end());