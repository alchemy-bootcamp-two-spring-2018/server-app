const client = require('../db-client');
const purposes = require('./purposes.json');

Promise.all(
  purposes.map(purpose => {
    return client.query(`
      INSERT INTO purposes (name)
      VALUES ($1);
    `,
    [purpose.name]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());