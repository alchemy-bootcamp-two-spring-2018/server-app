const URL = 'http://localhost:3000/api';
const PROGRAMS_URL = `${URL}/programs`;

export function getGenres() {
  return fetch(`${URL}/genres`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function getPrograms() {
  return fetch(PROGRAMS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addProgram(program) {
  return fetch(PROGRAMS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(program)
  })
    .then(response => response.json());
}

export function updateProgram(program) {
  return fetch(`${PROGRAMS_URL}/${program.programId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(program)
  })
    .then(response => response.json());
}

export function deleteProgram(id) {
  return fetch(`${PROGRAMS_URL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json());
}