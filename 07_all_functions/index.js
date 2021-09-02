let a = document.querySelector('#container')
let b1 = document.querySelector('.b-1')
let b2 = document.querySelector('.b-2')

function one() {
    console.log('Hi')
    a.innerHTML = 'Hello!'
    return 54
}

b1.onclick = one

b2.onclick = () => {
    console.log('The one function return: ')
    console.log(one())
}