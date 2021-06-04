var short = document.getElementById('output');

var number = parseInt(prompt('Inserisci un numero!'));

if (isNaN(number)) {
    alert('Non hai inserito un numero!!')
    location.reload();
}

if (number % 2 === 0) {
    short.innerHTML = 'Il numero ' + number + ' è pari!';
} else {
    short.innerHTML = 'Il numero ' + number + ' è dispari... Rendiamolo pari, così! <br><br>' + (number + 1);
}