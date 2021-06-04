var short = document.getElementById('output');

var number1 = prompt('Inserisci il primo numero!');
number1 = parseInt(number1);
var number2 = prompt('Inserisci il secondo numero!');
number2 = parseInt(number2);

console.log(number1);
console.log(number2);

if (isNaN(number1) || isNaN(number2)) {
    alert('Inserisci dei numeri!');
    location.reload();
}

if (number1 > number2) {
    short.innerHTML = number1;
} else if (number1 < number2) {
    short.innerHTML = number2;
} else {
    short.innerHTML = 'I due numeri sono uguali!';
}