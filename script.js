//your JS code here. If required.
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
   