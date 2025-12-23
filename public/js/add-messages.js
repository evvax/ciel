const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');
const messagesContainer = document.querySelector('.messages-container');

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = messageInput.value.trim();
  if (!text) return;

  const msgEl = document.createElement('div');
  msgEl.className = 'message';
  msgEl.textContent = text;
  messagesContainer.appendChild(msgEl);

  messagesContainer.prpend(msgEl);
  messageInput.value = '';
});
