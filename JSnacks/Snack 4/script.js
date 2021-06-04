var short = document.getElementById('output');
var check;

var guests = ['Alice', 'Benjamin', 'Ciccio', 'Dante', 'Eleonora'];

var userName = prompt('Inserisci il tuo nome!');

for (i=0; i < guests.length; i++) {
    if (userName === guests[i]) {
        check = true;
        break;
    }
}

if (check) {
    short.innerHTML = 'Benvenuto alla festa!!';
} else {
    short.innerHTML = 'Ci dispiace, ma non sei stato invitato.';
}