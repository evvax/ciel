const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');
const messagesContainer = document.querySelector('.messages-container');

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = messageInput.value.trim();
  if (!text) return;

  const msgEl = document.createElement('div');
  msgEl.className = 'message';

  const timeEl = document.createElement('span');
  timeEl.className = 'message-time';
  
  const now = new Date();
  timeEl.textContent = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  const textEl = document.createElement('span');
  textEl.className = 'message-text';
  textEl.textContent = text;

  msgEl.appendChild(textEl);
  msgEl.appendChild(timeEl);

  messagesContainer.prepend(msgEl);
  messageInput.value = '';
});
