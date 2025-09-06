// back.js
document.addEventListener("DOMContentLoaded", () => {
  const arrow = document.createElement("a");
  arrow.href = "/index.html"; // your homepage
  arrow.textContent = "←";
  arrow.className = "back-arrow";
  document.body.appendChild(arrow);
});
