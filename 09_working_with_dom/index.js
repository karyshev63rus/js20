// const item = document.querySelector('#container')
// item.style.width = '150px'
// item.style.backgroundColor = 'orange'
// item.style.fontSize = '46px'
// item.style.color = '#FFF'

// console.log(document.querySelector('.one')
// .getAttribute('data'))

// let qty = document.querySelector('.gallons').value
// let b = document.querySelectorAll('.gas')
// console.log(qty)

let gas_button = document.querySelectorAll('.gas')
for (i=0; i<gas_button.length; i++) {
   gas_button[i].onclick = function () {
    let qty = document.querySelector('.gallons').value
    let price = this.getAttribute('data')
       console.log(qty * price)
    }
}
//!!! this - это кнопка, по которой нажали