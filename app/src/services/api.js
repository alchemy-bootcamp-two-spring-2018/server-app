export function getBoardGames() {
  return fetch('http://localhost:3000/api/boardGames', {
    headers: { 'Content-type': 'application/json' }
  })
    .then(response => response.json());
}