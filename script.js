const powerRange = document.getElementById('power-range');
const powerValue = document.getElementById('power-value');
const led = document.getElementById('led');
const powerButton = document.getElementById('center');
let isOn = false;

powerRange.addEventListener('input', () => {
    powerValue.textContent = powerRange.value;
    console.log(`Motor power set to ${powerRange.value}%`);
    // Add your code to send the power value to the car
});

document.getElementById('up').addEventListener('click', () => {
    console.log('Move up');
    // Add your code to send the command to move the car up
});

document.getElementById('left').addEventListener('click', () => {
    console.log('Move left');
    // Add your code to send the command to move the car left
});

document.getElementById('right').addEventListener('click', () => {
    console.log('Move right');
    // Add your code to send the command to move the car right
});

document.getElementById('down').addEventListener('click', () => {
    console.log('Move down');
    // Add your code to send the command to move the car down
});

powerButton.addEventListener('click', () => {
    isOn = !isOn;
    if (isOn) {
        led.classList.remove('light-off');
        led.classList.add('light-on');
        console.log('Power on');
    } else {
        led.classList.remove('light-on');
        led.classList.add('light-off');
        console.log('Power off');
    }
    // Add your code to toggle the power state of the car
});

const joystick = document.getElementById('joystick');
const analogController = document.querySelector('.analog-controller');

joystick.addEventListener('mousedown', startDragging);
document.addEventListener('mouseup', stopDragging);
document.addEventListener('mousemove', dragJoystick);

let isDragging = false;

function startDragging(event) {
    isDragging = true;
}

function stopDragging() {
    isDragging = false;
    joystick.style.top = 'calc(50% - 40px)';
    joystick.style.left = 'calc(50% - 40px)';
    console.log('Joystick released');
    // Add your code to send the stop command
}

function dragJoystick(event) {
    if (!isDragging) return;

    const rect = analogController.getBoundingClientRect();
    let x = event.clientX - rect.left - 40;
    let y = event.clientY - rect.top - 40;

    const centerX = rect.width / 2 - 40;
    const centerY = rect.height / 2 - 40;
    const radius = rect.width / 2 - 40;

    const dx = x - centerX;
    const dy = y - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > radius) {
        const angle = Math.atan2(dy, dx);
        x = centerX + radius * Math.cos(angle);
        y = centerY + radius * Math.sin(angle);
    }

    joystick.style.left = `${x}px`;
    joystick.style.top = `${y}px`;

    console.log(`Joystick moved to (${x}, ${y})`);
    // Add your code to send the joystick position
}
