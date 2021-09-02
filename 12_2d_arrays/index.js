let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
document.querySelector('#container')
.innerHTML = arr
console.log(arr)

// let d = arr.length
// for (i=0; i<d; i++) {
//     for (j=0; j<d; j++) {
//         console.log(`arr[${i}][${j}]: `, arr[i][j])
//     }
// }

let odd_arr = [
    ['a', 'b', 'c'],
    [1, 2, 3, 4],
    [true, false]
]

// console.log('odd_arr.length: ', odd_arr.length)

// for (let i=0; i<odd_arr.length; i++) {
//     for (let k=0; k<odd_arr[i].length; k++) {
//         console.log(`arr[${i}][${k}]: `, odd_arr[i][k])
//     }
// }

let one = [1, 0, 0, 0, 0]
document.querySelector('.container').innerHTML = one
let k = 0
let one_length = one.length
let  n = one_length - 1
let elem = one[one.length -1]

document.querySelector('button').onclick = () => {
    if (k < one_length - 1) {
        one[k] = 0
        one[k+1] = 1
        k++
        document.querySelector('.container').innerHTML = one
    } else { if (n > 0) {
        one[n] = 0
        one[n-1] = 1
        n--
        document.querySelector('.container').innerHTML = one
        }
    }
}