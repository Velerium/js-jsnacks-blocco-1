short = document.getElementById('output');

var numbers = parseInt(prompt('Di quanti numeri vuoi il cubo?'));

if (isNaN(numbers)) {
    alert('Invalid value!');
}

for (n=1; n <= numbers; n++) {
    short.innerHTML += Math.pow(n, 3) + '   ';
}