const callBtn = document.querySelector('.call-btn');
const callPanel = document.getElementById('callPanel');
const callTimerSpan = document.getElementById('callTimer');

let inCall = false;
let callSeconds = 0;
let callInterval = null;

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

callBtn.addEventListener('pointerup', (e) => {
  e.preventDefault();

  if (!inCall) {
    inCall = true;
    callBtn.classList.add('in-call');
    callPanel.style.display = 'block';
    callSeconds = 0;
    callTimerSpan.textContent = formatTime(callSeconds);

    callInterval = setInterval(() => {
      callSeconds++;
      callTimerSpan.textContent = formatTime(callSeconds);
    }, 1000);

    console.log('Ringing to...');
  } else {

    inCall = false;
    callBtn.classList.remove('in-call');
    callPanel.style.display = 'none';
    clearInterval(callInterval);
    callInterval = null;
    console.log('Call ended.');
  }
});
