let arr = ['Alex', 37, 'ru']

document.querySelector('#container').innerHTML = arr[0]
console.log(arr[0], arr[1], arr[2])
console.log('length of arr: ', arr.length)

let place = ''

for (i=0; i<arr.length; i++) {
    console.log(arr[i])
    if (i < arr.length -1) {
        place += arr[i] + '-'
    } else {
        place += arr[i]
    }
}

document.querySelector('#place').innerHTML = place