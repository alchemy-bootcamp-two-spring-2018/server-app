export function getGuitarists() {
  return fetch('http://localhost:1337/data/guitarists', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addGuitarist(guitarist) {
  return fetch('http://localhost:1337/data/guitarists', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(guitarist)
  })
    .then(response => response.json());
}