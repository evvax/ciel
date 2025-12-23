const avatar = document.getElementById("user-avatar");
const input = document.getElementById("avatar-input");
const overlay = document.querySelector(".avatar-overlay");

if ('ontouchstart' in window) {
  avatar.addEventListener("touchstart", () => {
    overlay.style.opacity = 1;
  });
  avatar.addEventListener("touchend", () => {
    overlay.style.opacity = 0;
    input.click();
  });
} else {
  avatar.addEventListener('click', () => {
    input.click();
  });
}

input.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    avatar.style.backgroundImage = `url(${event.target.result})`;
    avatar.style.backgroundSize = "cover";
    avatar.style.backgroundPosition = "center";
  };
  reader.readAsDataURL(file);
});

