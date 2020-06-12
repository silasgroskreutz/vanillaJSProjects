const msgEl = document.getElementById('msg');

const randomNum = getRandomNumber();

console.log(randomNum);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

//Start recognition and game
recognition.start();

//Cpature user speech
function onSpeak(e) {
  const msg = e.results[0][0].transcript;
  // writeMessage(msg)
  // checkMessage(msg)
}

// Generate Random Number
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Speak result
recognition.addEventListener('result', onSpeak);
