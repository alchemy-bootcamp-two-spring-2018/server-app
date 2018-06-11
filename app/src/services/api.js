export function getGenres() {
  return fetch('http://localhost:3000/api/genres', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function getPrograms() {
  return fetch('http://localhost:3000/api/programs', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addProgram(program) {
  return fetch('http://localhost:3000/api/programs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(program)
  })
    .then(response => response.json());
}

export function deleteProgram(id) {
  return fetch('http://localhost:3000/api/programs/' + id, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json());
}