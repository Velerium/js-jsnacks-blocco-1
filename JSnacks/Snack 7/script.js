var short = document.getElementById('output');

for (n=0; n<=1000; n++) {
    short.innerHTML += Math.pow (2, n) + '<br/>';
}