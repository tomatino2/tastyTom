// Gestion du mode sombre
var icon = document.getElementById("icon");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
};


window.addEventListener("load", () => {
    const elements = document.querySelectorAll(".fade-in-slide-up, .fade-in");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = "1"; 
        }, index * 150); 
    });
});
