const client = require('../db-client');
const days = require('./days.json');

Promise.all(
  days.map(day => {
    return client.query(`
        INSERT INTO days (name)
        VALUES ($1);
    `,
    [day.name]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());

