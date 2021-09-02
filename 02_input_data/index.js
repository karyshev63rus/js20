let a = 5
console.log(a)

let inputIn = document.querySelector('.input-in')
let button = document.querySelector('button')
let div = document.querySelector('.root')

button.onclick = function () {
    console.log('it works!')
    console.log(inputIn.value)
    let b =  inputIn.value
    console.log(b + 2)
    let c = +inputIn.value // use + if curent var is number
    console.log(c + 2)
    inputIn.value = '' // clean input window
    div.innerHTML = c * b
}