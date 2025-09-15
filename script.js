// handling button click and change text
// declaring variables
let btn = document.getElementById('shift');
let output = document.getElementById('output');

// adding event listener to the button
btn.addEventListener('click', function() {
    output.textContent = "Superman has arrived!"
    output.style.color = "blue";
    output.style.fontSize = "20px";
});

// JavaScript code to handle image hover effect
let img = document.querySelector('.image');
img.addEventListener('mouseover', function() {
    img.style.height = "300px"; // increase size on hover
});
img.addEventListener('mouseout', function() {
    img.style.height = "200px"; // revert to original size when not hovering
});

// declaring a global variable
const PI = 3.14;

function CircleCircumference(radius) {
    return 2 * PI * radius;
}
console.log(CircleCircumference(7)); // Example usage

// declaring a local variable
function calculateTotal(price, quantity, taxRate) {
    let subtotal = price * quantity;         // Local variable
    let total = subtotal + (subtotal * taxRate);
    return total;                            // Returns the final amount
}
console.log(calculateTotal(100, 2, 0.05)); // Example usage


// animation trigger for shape
const box = document.getElementById('boxer')

function startAnimation() {
  box.classList.add('animate')
}

function stopAnimation() {
  box.classList.remove('animate')
}

// testing the local variable
console.log(subtotal); // This will cause an error as subtotal is not defined globally