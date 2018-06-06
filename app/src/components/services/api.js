export function getShops() {
    return fetch('http://localhost:3000/api/shops', {
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json());
}