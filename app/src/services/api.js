export function getCocktails() {
  return fetch('http://localhost:3000/api/cocktails', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addCocktail(cocktail) {
  return fetch('http://localhost:3000/api/cocktails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cocktail)
  })
    .then(response => response.json());
}

export function deleteCocktail(cocktail) {
  return fetch('http://localhost:3000/api/cocktails/' + cocktail.id, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
}

export function updateCocktail(cocktail) {
  return fetch(`http://localhost:3000/api/cocktails/${cocktail.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cocktail)
  })
    .then(response => response.json());
}

export function getAlcohols() {
  return fetch('http://localhost:3000/api/alcohols', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}