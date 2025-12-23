let micOn = true;

const micButton = document.querySelector('.mic-btn');
const micToast = document.getElementById('micToast');

function showMicToast(isMuted) {
  micToast.textContent = isMuted ? 'Muted' : 'Unmuted';
  micToast.classList.toggle('muted', isMuted);

  micToast.classList.add('show');

  clearTimeout(micToast._timer);
  micToast._timer = setTimeout(() => {
    micToast.classList.remove('show');
  }, 1200);
}

micButton.addEventListener('click', () => {
  micOn = !micOn;

  micButton.classList.toggle('muted', !micOn);

  showMicToast(!micOn);

  if (micOn) {
    console.log('Microphone ON');
  } else {
    console.log('Microphone OFF');
  }
});
