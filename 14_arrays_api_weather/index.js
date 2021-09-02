fetch('https://ipinfo.io/json')
.then(function(resp) {return resp.json()})
.then(function(data) {console.log(data)})

fetch('https://ipinfo.io/json')
.then(function(resp) {return resp.json()})
.then(function(data) {
    for (key in data) {
        console.log(`${key}: ${data[key]}`)
        document.querySelector('#container').
        innerHTML += `${data[key]} <br>`
    }
})