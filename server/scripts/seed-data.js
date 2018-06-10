
const client = require('../db-client');
const stages = require('./stages.json');

Promise.all(
  stages.map(stage => {
    return client.query(`
        INSERT INTO stages (name, origin)
        VALUES ($1, $2);
    `,
    [stage.name, stage.origin]
    ).then(result => result.rows[0]);
  })
) 
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());