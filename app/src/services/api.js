
export function getMotorcycles() {
  return fetch('http://localhost:3000/api/motorcycles', {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json());
}