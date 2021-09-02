let b = document.querySelector('#button-color')

b.onclick = () => {
    let a = document.querySelector('#input-color')
    console.log(`The color: ${a.value}`)
    b.style.backgroundColor = a.value
}