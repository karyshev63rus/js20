let a = new Set()
console.log(a, a.size)
a.add(5)
a.add(7)
a.add('Hello')
console.log(a, a.size)
console.log(a.has(7))
console.log(a.has(3))

let res = ''
for (item of a) {
    res += ` ${item}`
}
document.querySelector('#container')
.innerHTML = res