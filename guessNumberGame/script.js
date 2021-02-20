let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

const output = document.querySelector('#output');
const prompt = document.querySelector('#prompt');
const input = document.querySelector('#prompt input');

input.focus();
//create disable mouse click
document.onclick = function(event) {
  document.getElementById("input").focus();
};

prompt.addEventListener('submit', handleSubmit);

printMessage('robco industries (tm) termlink protocol');
printMessage('enter number now');
//print attempts count

function handleSubmit(event) {
  event.preventDefault();
  processInput(input.value);
  input.value = '';
}

function printMessage(message) {
  let li = document.createElement('li');
  li.textContent = message;
  output.appendChild(li);
}

function processInput(input) {
  if (!input) return;
  
  printMessage(input);
  let guess = Number.parseInt(input);
  if (Number.isNaN(guess)) return;
  guesses += 1;

  if (guess > randomNumber) {
    printMessage('too much. try again');
  } else if (guess < randomNumber) {
    printMessage('less. try again');
  } else {
    printMessage('you were right!');
    prompt.remove();
  }
}