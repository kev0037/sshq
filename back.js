// back.js
document.addEventListener("DOMContentLoaded", () => {
  const arrow = document.createElement("a");
  arrow.href = window.location.origin;
  arrow.textContent = "←";
  arrow.className = "back-arrow";
  document.body.appendChild(arrow);
});
 // --- Rickroll Easter Egg ---
  document.addEventListener("input", (e) => {
    if (e.target.tagName.toLowerCase() === "input") {
      const val = e.target.value.toLowerCase();
      if (val.includes("rickroll")) {
        showRickroll();
        e.target.value = ""; // clear field
      }
    }
  });

  function showRickroll() {
    // Create overlay
    const overlay = document.createElement("div");
    overlay.className = "rickroll-overlay";
    overlay.innerHTML = `
      <div class="rickroll-content">
        <iframe width="560" height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="Rickroll"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen>
        </iframe>
        <button class="close-rickroll">✖</button>
      </div>
    `;

    document.body.appendChild(overlay);

    // Close button
    overlay.querySelector(".close-rickroll").addEventListener("click", () => {
      overlay.remove();
    });
  }
});
