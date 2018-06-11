
const URL = 'http://localhost:3000/api';
const FRUITS_URL = `${URL}/fruits`;


export function getFruits() {
  return fetch(FRUITS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addFruit(fruit) {
  return fetch(FRUITS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fruit)
  })
    .then(response => response.json());
}

export function updateFruit(fruit) {
  return fetch(`${FRUITS_URL}/${fruit.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fruit)    
  })
    .then(response => response.json());
}

export function removeFruit(id) {
  return fetch(`${FRUITS_URL}/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json());
}

export function getClassifications() {
  return fetch(`${URL}/classifications`, {
    headers: { 'Content-Type': 'application/json' }  
  })
    .then(response => response.json());  
}