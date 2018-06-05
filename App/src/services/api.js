

export function getAmps() {
  return fetch('http://localhost:3000/api/amps', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

