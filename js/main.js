
// Select Elements
const btn = document.getElementById('btn');
const span = document.querySelector('.color');

// the Colors from 0 - 4
let colors = ['red', 'blue', 'green', '#DDD', '#EEE'];

btn.addEventListener('click', function() {
    
    // the random color generator
    const random = Math.floor(Math.random() * colors.length);
    // console.log(random); // testing
    
    // changing the colors
    document.body.style.backgroundColor = colors[random];
    span.textContent = colors[random];
});
