const messagesBtn = document.querySelector('.messages-btn');
const messagesPanel = document.getElementById('messagesPanel');

let messagesState = 'closed';

let tapTimeout = null;
const TAP_DELAY = 300;

messagesBtn.addEventListener('click', () => {
  if (tapTimeout) {
    clearTimeout(tapTimeout);
    tapTimeout = null;
    handleDoubletap();
  } else {
    tapTimeout = setTimeout(() => {
      handleSingletap();
      tapTimeout = null;
    }, TAP_DELAY);
  }
});

function handleSingletap() {
  if (messagesState === 'closed') {
    openHalf();
  } else {
    closePanel();
  }
}

function handleDoubletap() {
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
