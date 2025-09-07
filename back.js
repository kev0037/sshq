// back.js
document.addEventListener("DOMContentLoaded", () => {
  const arrow = document.createElement("a");
  arrow.href = window.location.origin;
  arrow.textContent = "←";
  arrow.className = "back-arrow";
  document.body.appendChild(arrow);
});

// skid preventation
document.addEventListener("keydown", function (e) {
    if (
        e.key === "F12" ||                              // F12
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j")    // Ctrl+Shift+J
    ) {
        alert("Stop skidding dude!");
        window.location.href = "about:blank"; // close/redirect page
    }
});
