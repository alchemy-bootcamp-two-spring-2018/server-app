
export function getNeighborhoods() {
  return fetch('http://localhost:3000/api/neighborhoods', {
    headers: { 'Content-Type': 'application/json'}
  })
    .then(response => response.json());
}