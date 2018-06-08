const client = require('../db-client');
const systems = require('./systems.json');

Promise.all(
  systems.map(system => {
    return client.query(`
        INSERT INTO systems (name)
        VALUES ($1);
    `,
    [system.name]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());