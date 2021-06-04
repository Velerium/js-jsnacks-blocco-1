var short = document.getElementById('output');

var word1 = prompt('Inserisci la prima parola!');
var word2 = prompt('Inserisci la seconda parola!');

if (word1.length > word2.length) {
    short.innerHTML = word2 + '   ' + word1;
} else if (word1.length < word2.length) {
    short.innerHTML = word1 + '   ' + word2;
} else {
    short.innerHTML = 'Le due parole hanno la stessa lunghezza!';
}