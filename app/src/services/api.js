export function getShops() {
    return fetch('http://localhost:3000/api/shops', {
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json());
}

export function addShop(shop) {
    return fetch('http://localhost:3000/api/shops', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(shop)
    })
        .then(response => response.json());
}
