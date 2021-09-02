arr = [1, 2, 3, 'a', 'b', 'c']
console.log(arr.length)
arr.push('d', 42)
console.log(arr.length)
let a = arr.pop()
console.log(a)
document.querySelector('#container').innerHTML = a
console.log(arr.length)
console.log(arr.pop())
console.log(arr.length)
delete arr[2]
console.log(arr, arr.length)
arr.splice(2,1) // с какого индекса и сколько удаляем
console.log(arr, arr.length)