let arr = {
    'a': 45,
    'b': true,
    c: NaN,
    'd': 'Hi there!',
    'e': {'f': 'It is me!', 'g': true}
}

// console.log(arr)

document.querySelector('.inner_A')
.innerHTML = arr.e.f

document.querySelector('.inner_B')
.innerHTML = arr['e']['g']

document.querySelector('.container')
.innerHTML = arr.a

document.querySelector('#container')
.innerHTML = arr.d

for (key in arr) {
    console.log(`${key} : ${arr[key]}`)
}