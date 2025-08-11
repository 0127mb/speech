let btn = document.querySelector('button');
let inp = document.querySelector('input');
let body = document.querySelector('body');
let select = document.getElementById('langSelect');

btn.addEventListener('click', () => {
  let speech = new SpeechSynthesisUtterance(inp.value);
  speech.lang = select.value;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 2;

  let voices = window.speechSynthesis.getVoices();
  let selectedVoice = voices.find(v => v.lang === select.value);
  if (selectedVoice) {
    speech.voice = selectedVoice;
  }

  window.speechSynthesis.speak(speech);

  if (inp.value == '') {
    let h1 = document.createElement('h1');
    h1.textContent = "Please write something!";
    body.appendChild(h1);
  }
});
