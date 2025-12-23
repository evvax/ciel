const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');
const messagesContainer = document.querySelector('.messages-container');

function addOutgoingMessage(text) {
  const msgEl = document.createElement('div');
  msgEl.className = 'message outgoing';

  const timeEl = document.createElement('span');
  timeEl.className = 'message-time';
  timeEl.textContent = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  const textEl = document.createElement('span');
  textEl.className = 'message-text';
  textEl.textContent = text;

  msgEl.appendChild(timeEl);
  msgEl.appendChild(textEl);

  messagesContainer.prepend(msgEl);
  messageInput.value = '';
}

function addIncomingMessage(text) {
  const msgEl = document.createElement('div');
  msgEl.className = 'message incoming';

  const textEl = document.createElement('span');
  textEl.className = 'message-text';
  textEl.textContent = text;

  const timeEl = document.createElement('span');
  timeEl.className = 'message-time';
  timeEl.textContent = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  msgEl.appendChild(textEl);
  msgEl.appendChild(timeEl);

  messagesContainer.prepend(msgEl);
}

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = messageInput.value.trim();
  if (!text) return;
  addOutgoingMessage(text);
});

// Ejemplo de prueba de mensajes entrantes
setTimeout(() => addIncomingMessage("Hola, ¿cómo estás?"), 1000);
setTimeout(() => addIncomingMessage("¿Viste la app?"), 3000);
setTimeout(() => addIncomingMessage("Está quedando genial 😎"), 5000);
