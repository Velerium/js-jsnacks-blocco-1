var short = document.getElementById('output');

var result = 0;
var check = true;

for (n = 0; n < 10; n++) {
    var number = parseInt(prompt('Inserisci un numero!'));

    if (isNaN(number)) {
        check = false;
        short.innerHTML = 'Hai inserito un valore non valido!! Ricarica e riprova!';
        break;
    }
    result += number;
}

if (check === true) {
short.innerHTML = 'La somma dei numeri è: ' + result;
}