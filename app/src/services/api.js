

export function getFruits() {
  return fetch('http://localhost:3000/api/fruits', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addFruit(fruit) {
  return fetch('http://localhost:3000/api/fruits', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(fruit)
})
    .then(response => response.json());
}
