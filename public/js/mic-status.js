let micOn = true;
const micButton = document.querySelector('.mic-btn');

micButton.addEventListener('click', () => {
  micOn = !micOn;
  micButton.classList.toggle('muted', !micOn);

  if (micOn) {
    console.log('Microphone ON');
  } else {
    console.log('Microphone OFF');
  }
});
