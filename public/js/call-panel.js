const callBtn = document.querySelector('.call-btn');
const callToast = document.querySelector('.call-toast');

let callInterval = null;
let seconds = 0;

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

callBtn.addEventListener('click', () => {
  callBtn.classList.toggle('in-call');

  if (callBtn.classList.contains('in-call')) {
    console.log('Ringing to...');

    callToast.classList.add('show');
    seconds = 0;
    callToast.textContent = formatTime(seconds);
    callInterval = setInterval(() => {
      seconds++;
      callToast.textContent = formatTime(seconds);
    }, 1000);
  } else {
    console.log('Call ended');

    callToast.classList.remove('show');
    clearInterval(callInterval);
    callInterval = null;
  }
});

