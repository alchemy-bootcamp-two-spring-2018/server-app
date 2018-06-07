
export function getMotorcycles() {
  return fetch('http://localhost:3000/api/motorcycles', {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json());
}

export function addMotorcycle(motorcycle) {
  return fetch('http://localhost:3000/api/motorcycles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(motorcycle)
  })
    .then(response => response.json());
}

export function removeMotorcycle(motorcycle) {
  return fetch('http://localhost:3000/api/motorcycles', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(motorcycle)
  })
    .then(response => response.json());
}