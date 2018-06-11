const client = require('../db-client');
const positions = require('./positions.json');

Promise.all(
  positions.map(position => {
    return client.query(`
			INSERT INTO positions(position)
			VALUES ($1);
		`,
	[position.position]
).then(result => result.rows[0]);
  })
)
	.then(
		() => console.log('SEED DATA LOAD SUCCESSFUL'),
		err => console.error(err)
	)
	.then(() => client.end());