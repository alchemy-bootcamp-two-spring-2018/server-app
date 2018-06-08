const client = require('../db-client');
const quadrants = require('./quadrants.json');

Promise.all(
  quadrants.map(quadrant => {
    return client.query(`
      INSERT INTO quadrants (name)
      Values ($1);
    `,
    [quadrant.name]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());
  