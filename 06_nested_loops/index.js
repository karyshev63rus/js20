let item = document.querySelector('#container')

for (let i=1; i<=5; i++) {
    for (let j=1; j<=5; j++) {
        item.innerHTML += `${i}x${j}=${i*j}<br>`
    }
    item.innerHTML += '<hr>'
}