var short = document.getElementById('output');
var short2 = document.getElementById('evenNumbers')

var oddNumbers = [];

for (n=0; n<6; n++) {
    var input = parseInt(prompt('Inserisci un numero!'));
    if (isNaN(input)) {
        short.innerHTML = 'Invalid value detected! Refresh and try again!'
        break;
    }
    else if (input%2 === 1) {
        oddNumbers.push(input);
    } else {
        short2.innerHTML += input + '   ';
    }
}

console.log(oddNumbers);