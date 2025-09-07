// skid preventation
document.addEventListener("keydown", function (e) {
    if (
        e.key === "F12" ||                              // F12
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j")    // Ctrl+Shift+J
    ) {
        // Show message
        alert("no skidding kid!");

        // Try to close the window
        window.open("", "_self"); // some browsers require this
        window.close();

        // Fallback: make page unusable
        document.body.innerHTML = "";
        document.body.style.background = "#000";
        document.body.style.height = "100vh";
    }
});
