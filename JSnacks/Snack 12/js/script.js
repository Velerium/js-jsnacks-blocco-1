var short2 = document.getElementById('output');
var short = document.getElementById('max');
var text = '';

var fontChange1 = 15;
var fontChange2 = 20;
var fontLimit = 25;

var max = parseInt(prompt('How many random names do you need? (max 25)'));

var nomi = ['Anna', 'Beppe', 'Carlo', 'Daniela', 'Elena', 'Francesco', 'Giuseppe', 'Irene', 'Laura', 'Massimo'];
var cognomi = ['Bianchi', 'Rossi', 'Gialli', 'Verdi', 'Neri', 'Ferrari', 'Russo', 'Esposito', 'Colombo', 'Romano', 'Ricci', 'Gallo', 'Greco', 'Conti', 'Marino'];

if (isNaN(max)){
    alert('Please insert a number!')
    location.reload(); // Checks for a number in the prompt
}

if (max > fontChange1 && max <= fontChange2) {  // Edits font-size if 15+ names are requested!
    short2.style.fontSize = '18px';
} else if (max > fontChange2 && max <= fontLimit) {
    short2.style.fontSize = '16px';
} else if (max > fontLimit) {        // ...up to a limit, that is.
    alert('Please insert a lower number!');
}

if (max === 1) {
    short.innerHTML = 'Here, ' + max + ' random name!';  
} else if (max > 1 && max < fontLimit) {
    short.innerHTML = 'Here, ' + max + ' random names!'; // Changes HTML based on user input!
}           //Improved readability if 25 threshold is exceeded.

if (max === 0) {          // A bit of humor never hurt anybody.
    text = 'Alright, I guess...?'
} else if (max > fontLimit) {
    text = 'Please try again.'
} else {
    for (n = 0; n < max; n++) {
        text += nomi[Math.floor(Math.random()*nomi.length)] + '  ';
        text += cognomi[Math.floor(Math.random()*cognomi.length)] + '<br>';
    }
}

short2.innerHTML = text;

