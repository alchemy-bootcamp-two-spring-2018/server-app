const client = require('../db-client');
const climbingLocations = require('./climb-locations.json');

Promise.all(
  climbingLocations.map(locations => {
    return client.query(`
      INSERT INTO climbinglocations (name, location, climbingstyle_id, elevation, yearroundclimbing, description)
      VALUES ($1, $2, $3, $4, $5, $6);
      `,
    [locations.name, locations.location, locations.climbingstyle_id, locations.elevation, locations.yearroundclimbing, locations.description]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());