// Selecting dom elements
const btn = document.getElementById('btn');
const span = document.querySelector('.color');

// the color making (0-16)
const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'b', 'c', 'd', 'e', 'f'];

// the Event Handler
btn.addEventListener('click', function() {
    let hexval = '#';

    // # FF FF FF FF (just 6 times to make a right hex code)
    for(var i = 0; i < 6; i++) {
        hexval += color[randomGenerator()];
    
    }
    console.log(hexval); //testing

    document.body.style.backgroundColor = hexval;
    span.textContent = hexval;

    //End of the event
});

function randomGenerator() {
    return Math.floor(Math.random() * color.length);
}