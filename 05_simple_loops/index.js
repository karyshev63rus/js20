// for (let i=1; i<10; i++) {
//     console.log(i)
// }

let count = 0

for (let i=0; i<10; i++) {
    console.log('iteration: ', i, 'count: ', count)
    if (i==3) continue
    count += 1
    if (i==5) {
        break
    }
}

// let div = document.querySelectorAll('div')
// for (k=0; k<div.length; k++) {
//     console.log(k, div[k])
//     div[k].style.backgroundColor = 'orange'
//     div[k].style.margin = '5px'
// }

let b = document.querySelector('button')

b.onclick = () => {
    let c = document.querySelectorAll('input')
    for (i=0; i<c.length; i++) {
        if (!c[i].checked) {
            console.log(c[i].value)
        }
    }
}



