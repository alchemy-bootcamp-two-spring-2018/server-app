const URL = 'http://localhost:3000/api';
const SUBS_URL = `${URL}/subscriptions`;

export function getSubscriptions() {
  return fetch(SUBS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addSubscription(subscription) {
  return fetch(SUBS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(subscription)
  })
    .then(response => response.json());
}

export function updateSubscription(subscription) {
  return fetch(`${SUBS_URL}/${subscription.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(subscription)
  })
    .then(response => response.json());
}

export function removeSubscription(id) {
  return fetch(`${SUBS_URL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json());
}

export function getPurposes() {
  return fetch(`${URL}/purposes`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}