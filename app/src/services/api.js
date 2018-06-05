export function getWalruses() {
  return fetch('http://localhost:3000/api/walruses', {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json());
}

export function addWalrus() {
  return fetch('http://localhost:3000/api/walruses', {
  method: 'POST',  
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(walrus)
  })
  .then(response => response.json());
}