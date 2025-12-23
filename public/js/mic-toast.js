const toast = document.getElementById('actionToast');
const micButton = document.querySelector('.mic-btn');
const callButton = document.querySelector('.call-btn');

let micOn = true;
let inCall = false;
let toastTimer = null;
let callInterval = null;
let seconds = 0;

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function showToast(text, keep = false) {
  toast.textContent = text;
  toast.classList.toggle('muted', text === 'Muted');
  toast.classList.add('show', 'expand');
  setTimeout(() => toast.classList.remove('expand'), 150);

  clearTimeout(toastTimer);

  if (!keep) {
    toastTimer = setTimeout(() => {
      if (!inCall) toast.classList.remove('show');
    }, 1200);
  }
}

function startCallTimer() {
  seconds = 0;
  showToast(formatTime(seconds), true);

  clearInterval(callInterval);
  callInterval = setInterval(() => {
    seconds++;
    toast.textContent = formatTime(seconds);
  }, 1000);
}

micButton.addEventListener('click', () => {
  micOn = !micOn;
  micButton.classList.toggle('muted', !micOn);

  showToast(micOn ? 'Unmuted' : 'Muted', inCall);

  console.log(micOn ? 'Microphone ON' : 'Microphone OFF');
});

callButton.addEventListener('click', () => {
  inCall = !inCall;

  callButton.classList.toggle('in-call', inCall);

  if (inCall) {
    showToast('In Call', true);
    console.log('Call started');
    setTimeout(() => {
      if (inCall) startCallTimer();
    }, 1000);
  } else {
    clearInterval(callInterval);
    toast.classList.remove('show');
    console.log('Call ended');
  }
});
