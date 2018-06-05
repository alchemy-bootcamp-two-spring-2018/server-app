export function getRappers() {
  return fetch('http:http://localhost:3000/api/neighborhoods', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}