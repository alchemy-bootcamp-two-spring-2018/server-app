export function getSubscriptions() {
  return fetch('http://localhost:3000/api/subscriptions', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addSubscription(subscription) {
  return fetch('http://localhost:3000/api/subscriptions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(subscription)
  })
    .then(response => response.json());
}

export function removeSubscription(subscription) {
  return fetch('http://localhost:3000/api/subscriptions', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(subscription)
  })
    .then(response => response.json());
}