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


document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const submitButton = this.querySelector('button[type="submit"]');
    const loadingMessage = document.createElement('p');
    loadingMessage.innerHTML = 'Envoi en cours...';
    this.appendChild(loadingMessage);
    submitButton.disabled = true;

    fetch(this.action, {
        method: 'POST',
        body: formData,
    })
        .then(response => {
            loadingMessage.style.display = 'none';
            submitButton.disabled = false;
            if (response.ok) {
                document.getElementById('messageVer').style.display = 'block';
                document.getElementById('errorVer').style.display = 'none';
            } else {
                document.getElementById('errorVer').style.display = 'block';
                document.getElementById('messageVer').style.display = 'none';
            }
        })
        .catch(() => {
            loadingMessage.style.display = 'none';
            submitButton.disabled = false;
            document.getElementById('errorVer').style.display = 'block';
            document.getElementById('messageVer').style.display = 'none';
        });
});
