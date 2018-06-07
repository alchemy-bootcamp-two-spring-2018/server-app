export function getGuitarists() {
  return fetch('http://localhost:1337/api/guitarists', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addGuitarist(guitarist) {
  return fetch('http://localhost:1337/api/guitarists', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(guitarist)
  })
  .then(response => response.json());
}

export function removeGuitarist(guitarist) {
  return fetch('http://localhost:1337/api/guitarists', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(guitarist)
  })
}