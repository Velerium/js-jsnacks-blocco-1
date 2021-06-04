var short = document.getElementById('output');

nTimes = 5;
var sum = 0

for (n = 0; n < nTimes; n++) {
    var number = parseInt(prompt('Inserisci un numero!'))
    if (isNaN(number)) {
        alert('Non hai inserito un numero! Ricarica e riprova!')
        sum = NaN;
        break;
    }
    sum += number;
}

short.innerHTML = 'La somma (con il for) è: ' + sum + '<br><br>';

// -------- WHILE -------- //

var sum2 = 0;
m = 0;

while (m < nTimes) {
    var number = parseInt(prompt('Inserisci un numero!'))
        if (isNaN(number)) {
            alert('Non hai inserito un numero! Ricarica e riprova!')
            sum2 = NaN;
            break;
        }
    sum2 += number;
    m++;
}

short.innerHTML += 'La somma (con il while) è: ' + sum2;
