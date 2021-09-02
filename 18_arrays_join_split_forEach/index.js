let arr = [1, 2, 'Hello']
console.log(arr.join(', '))

let str = '1 2 Hello'
console.log(str.split(' '))

arr.forEach(function (element, index) {
    if (index % 2 == 0) {
        console.log(element)
        console.log('---')
    }
});

arr.forEach(item => {
    console.log(item)
})