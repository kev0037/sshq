// back.js
document.addEventListener("DOMContentLoaded", () => {
  const arrow = document.createElement("a");
  arrow.href = window.location.origin;
  arrow.textContent = "←";
  arrow.className = "back-arrow";
  document.body.appendChild(arrow);
});
