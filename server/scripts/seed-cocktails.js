const client = require('../db-client');
const cocktails = require('../data/cocktails.json');

Promise.all(
  cocktails.map(cocktail => {
    return client.query(`
      INSERT INTO cocktails (name, alcohol_id, ingredients, served, garnish, tried, image)
      VALUES ($1, $2, $3, $4, $5, $6, $7);
    `,
    [cocktail.name, cocktail.alcohol_id, cocktail.ingredients, cocktail.served, cocktail.garnish, cocktail.tried, cocktail.image]
    ).then(result => result.rows[0]);
  })
)

  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());
