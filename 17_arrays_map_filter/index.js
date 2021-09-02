let arr = [1, 2, 3, 4, 5]

let res = ''

arr.map(function(item) {
    res += item + '---'
    console.log(res)
})

let mult = 1
arr.map((item) => {
    mult *= item * 10
})
console.log(`mult is: ${mult}`)

arr.map(item => console.log(item))

filt = arr.filter((item) => item < 3)
console.log(filt)

filt = arr.filter(function(item) {
    if (item % 2 !== 0) {
        return true
    }
})
console.log(filt)

