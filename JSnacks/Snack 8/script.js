var short = document.getElementById('output');
var sum = 0;

var number = prompt('Inserisci un numero di 4 cifre!')

if (number.length !== 4) {
    alert('Non hai inserito un numero di quattro cifre!')
    location.reload();
}

for(n = 0; n < number.length; n++) {
    sum += parseInt(number[n]);
}


if(isNaN(sum)) {
    alert('Inserisci un valore valido!')
    location.reload();
}

short.innerHTML = 'La somma delle cifre del tuo numero è ' + sum;