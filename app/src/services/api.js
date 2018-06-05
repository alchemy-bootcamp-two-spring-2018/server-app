export function getLocations() {
  return fetch('http://localhost:3000/api/locations', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

