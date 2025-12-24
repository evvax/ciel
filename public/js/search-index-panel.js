const indexInput = document.getElementById('indexInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => {
  performSearch(indexInput.value);
});
indexInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    performSearch(indexInput.value);
  }
});

function performSearch(value) {
  console.log('Searching:', value);
}
