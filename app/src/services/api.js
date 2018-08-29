export function getGames() {
  return fetch('http://localhost:3000/api/games', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}
export function addGame(game) {
  return fetch('http://localhost:3000/api/games', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(game)
  })
    .then(response => response.json());
}
export function deleteGame(game) {
  return fetch('http://localhost:3000/api/games/' + game.id, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json());
}