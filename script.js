//your JS code here. If required.
// const textElement = document.getElementById("text");
// const speedInput = document.getElementById("speed");
// const startButton = document.getElementById("startButton");

// let intervalId;

// startButton.addEventListener("click", function () {
//     clearInterval(intervalId);

//     const speed = parseInt(speedInput.value);
//     const text = textElement.innerText;
//     textElement.innerText = ''
//     if (speed >= 1 && speed <= 10) {
//         const delay = 500 / speed;
//         let i = 0;

//         intervalId = setInterval(function () {
//             if (i < text.length) {
//                 textElement.textContent += text[i];
//                 i++;
//             } else {
//                 clearInterval(intervalId);
//             }
//         }, delay);
//     } else {
//         alert("Please enter a speed between 1 and 10.");
//     }
// });

const text = document.getElementById('text');
      const speedInput = document.getElementById('speed');
      const originalText = 'We love Programming!';
      let currentIndex = 0;

      function typeNextCharacter() {
        if (currentIndex < originalText.length) {
          const currentCharacter = originalText.charAt(currentIndex);
          text.innerHTML += currentCharacter;
          currentIndex++;
          setTimeout(typeNextCharacter, 500 / parseInt(speedInput.value));
        }
      }

      speedInput.addEventListener('input', () => {
        // Reset the text and index when the speed changes
        text.innerHTML = '';
        currentIndex = 0;
        // Start typing again with the new speed
        typeNextCharacter();
      });

      // Start typing the text with the initial speed
      typeNextCharacter();