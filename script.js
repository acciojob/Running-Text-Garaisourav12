const text = document.getElementById("text");
const speed = document.getElementById("speed");

let str = text.innerText;
let n = str.length;
let end = 0;
let timeGap = 700;

const startTyping = () => {
  return setInterval(() => {
    text.innerText = str.slice(0, end);
    end = (end + 1) % (n + 1);
  }, timeGap - Number(speed.value) * 50);
};

let timerId = startTyping();

speed.addEventListener("input", () => {
  clearInterval(timerId);
  let timerId = startTyping();
});