const client = require('../db-client');
const climbStyles = require('./climb-styles.json');

Promise.all(
  climbStyles.map(location => {
    return client.query(`
      INSTERT INTO climbinglocations (type)
      VALUES ($1);
      `,
    [location.type]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());