const URL = 'http://localhost:3000/api';
const GLUCOSELOGS_URL = `${URL}/glucoselogs`;

export function getglucoselogs() {
  return fetch(GLUCOSELOGS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}
 
export function addglucoselog(glucoselog) {
  return fetch(GLUCOSELOGS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(glucoselog)
  })
    .then(response => response.json());
}

export function updateglucoselog(glucoselog) {
  return fetch(`${GLUCOSELOGS_URL}/${glucoselog.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(glucoselog)
  })
    .then(response => response.json());
}

//Not done with this code: 
//export function removeglucoselog(id) {
//   console.log('id', id);
//   return fetch('http://localhost:3000/api/glucoselogs/' + id, {
//     method: 'DELETE'
//   })
//     .then(response => response.json());
// }

export function removeglucoselog(id) {
  console.log('id', id);
  return fetch(`${GLUCOSELOGS_URL}/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json());
}

export function getDays() {
  return fetch(`${URL}/days`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}