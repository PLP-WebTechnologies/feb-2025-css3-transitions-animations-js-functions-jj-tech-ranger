document.getElementById("animateBtn").addEventListener("click", function() {
    this.classList.add("animate");
    setTimeout(() => this.classList.remove("animate"), 500);
});

document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    // Save user preference to localStorage
    const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("themePreference", theme);
});

// Load user preference on page load
document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("themePreference");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});
