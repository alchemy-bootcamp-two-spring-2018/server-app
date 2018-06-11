const client = require('../db-client');
const categories = require('./categories.json');

Promise.all(
  categories.map(category => {
    return client.query(`
      INSERT INTO categories (category)
        VALUES ($1);
    `,
    [category.category]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed categories data load successful'),
    err => console.log(err)
  )
  .then(() => client.end());