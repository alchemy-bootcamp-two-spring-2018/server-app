const client = require('../db-client');
const alcohols = require('./alcohols.json');

Promise.all(
  alcohols.map(alcohol => {
    return client.query(`
      INSERT INTO alcohols (alcohol)
      VALUES ($1);
    `,
    [alcohol.alcohol]
    ).then(result => result.rows[0]);
  })
)

  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());
