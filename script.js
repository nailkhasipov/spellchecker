const textArea = document.getElementById("editable");

const phrase = 'Я профессионально пишу на русском языке';
const phraseArray = phrase.split(' ');

let message = `Привет, начнем тестирование. Напиши одну простую фразу: ${phrase}. Затем нажми кнопку проверить.`;

window.onload = function() {
  write(message);
  speak(phrase);
  setFocus();
}

function write(message) {
  let messageDiv = document.createElement('span');
  messageDiv.innerText = message;
  document.querySelector('#chat').appendChild(messageDiv);
}

function checkSpelling() {
  const text = textArea.innerText;
  const wordsArray = text.split(' ');
  textArea.innerHTML = '';

  for (var i = 0; i < wordsArray.length; i ++) {
    word = wordsArray[i];
    let span = document.createElement('span');
    span.innerText = word;
    if (wordsArray[i] != phraseArray[i]) {
      span.style.textDecoration = 'line-through';
      span.style.color = 'red';
    }
    textArea.appendChild(span);
    textArea.innerHTML += ' ';
  }
}

function setFocus() {
  var range = document.createRange();
  var sel = window.getSelection();
  range.setStart(textArea.childNodes[0], 0);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
  textArea.focus();
}

function speak(phrase) {
  var synth = window.speechSynthesis;
  var utterThis = new SpeechSynthesisUtterance(message);
  
  setTimeout(function() {
    utterThis.voice = synth.getVoices()[27];
  
    synth.speak(utterThis);
  }, 100);
}