var short = document.getElementById('output');
var number = 0;
var max = 10;

for (n = 1; n <= max; n++) {
    number += n;
}

var average = parseFloat(number/(max));

short.innerHTML = 'La somma è: ' + number + '.' + '<br>'
short.innerHTML += 'La media è: ' + average + '.';
