const URL = 'http://localhost:3000/api';
const GAMES_URL = `${URL}/games`;

export function getGames() {
  return fetch('GAMES_URL', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addGame(game) {
  return fetch('GAMES_URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(game)
  })
    .then(response => response.json());
}

export function updateGame(game) {
  return fetch(`${GAMES_URL}/${game.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(game)
  })
    .then(response => response.json());
}

export function deleteGame(id) {
  return fetch(`${GAMES_URL}/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json());
}

export function getSystems() {
  return fetch(`${URL}/systems`, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json());
}