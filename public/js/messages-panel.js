const messagesBtn = document.querySelector('.messages-btn');
const messagesPanel = document.getElementById('messagesPanel');

let messagesState = 'closed';

let tapTimeout = null;
const TAP_DELAY = 300;

if (messagesBtn && messagesPanel) {
  messagesBtn.addEventListener('pointerup', (e) => {
    e.preventDefault();
    if (tapTimeout) {
      clearTimeout(tapTimeout);
      tapTimeout = null;
      handleDoubleTap();
    } else {
      tapTimeout = setTimeout(() => {
        handleSingleTap();
        tapTimeout = null;
      }, TAP_DELAY);
    }
  });
}

function handleSingleTap() {
  if (messagesState === 'closed') {
    openHalf();
  } else {
    closePanel();
  }
}

function handleDoubleTap() {
  if (messagesState === 'full') {
    closePanel();
  } else {
    openFull();
  }
}

function openHalf() {
  messagesPanel.classList.remove('full');
  messagesPanel.classList.add('half');
  messagesState = 'half';
}

function openFull() {
  messagesPanel.classList.remove('half');
  messagesPanel.classList.add('full');
  messagesState = 'full';
}

function closePanel() {
  messagesPanel.classList.remove('half', 'full');
  messagesState = 'closed';
}
