const client = require('../db-client');
const genres = require('../data/genres.json');
const programs = require('../data/npr-programs.json');

// load genres first
Promise.all(
  genres.map(genre => {
    return client.query(`
        INSERT INTO genres (genre)
        VALUES ($1);
    `,
    [genre.genre]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed data load for genres successful'),
    err => console.error(err)
  );

// then load programs
Promise.all(
  programs.map(program => {
    return client.query(`
            INSERT INTO programs (title, host, audienceSize, yearStarted, daily, genre_id, description)
            VALUES ($1, $2, $3, $4, $5, $6, $7);
        `,
    [program.title, program.host, program.audienceSize, program.yearStarted, program.daily, program.genre_id, program.description]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed data load for programs successful'),
    err => console.error(err)
  )
  .then(() => client.end());