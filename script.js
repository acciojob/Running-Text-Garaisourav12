//your JS code here. If required.
const textElement = document.getElementById("text");
const speedInput = document.getElementById("speed");
const startButton = document.getElementById("startButton");

let intervalId;

startButton.addEventListener("click", function () {
    clearInterval(intervalId);

    const speed = parseInt(speedInput.value);
    const text = textElement.innerText;
    textElement.innerText = ''
    if (speed >= 1 && speed <= 10) {
        const delay = 500 / speed;
        let i = 0;

        intervalId = setInterval(function () {
            if (i < text.length) {
                textElement.textContent += text[i];
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, delay);
    } else {
        alert("Please enter a speed between 1 and 10.");
    }
});