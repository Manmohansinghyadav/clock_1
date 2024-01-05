let hr = document.getElementById('hour');
let minElement = document.getElementById('min'); // Changed variable name to avoid conflict
let secElement = document.getElementById('sec'); // Changed variable name to avoid conflict

function displayTime() {
    let date = new Date();

    // Getting hours, minutes, and seconds from the date
    let hh = date.getHours();
    let mm = date.getMinutes(); // Changed variable name to avoid conflict
    let ss = date.getSeconds(); // Changed variable name to avoid conflict

    // Calculating rotation degrees
    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    // Applying transformations to the clock hands
    hr.style.transform = `rotate(${hRotation}deg)`;
    minElement.style.transform = `rotate(${mRotation}deg)`; // Changed variable name
    secElement.style.transform = `rotate(${sRotation}deg)`; // Changed variable name
}

// Updating the clock every second
setInterval(displayTime, 1000);
