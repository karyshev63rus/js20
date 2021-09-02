let inputIn = document.querySelector('input')
let button = document.querySelector('button')

button.onclick = function () {
    let number = inputIn.value
    if (number > 3) {
        console.log('Yes')
    } else if (number < 3 ) {
        console.log('No')
    } else {
        console.log('Equal')
    }

    switch (number) {
        case '15': 
        console.log('15');
        break;
        case '17': 
        console.log('17');
        break;
    }
}







