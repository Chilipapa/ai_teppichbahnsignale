// Warte, bis das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', () => {
    // Füge sanfte Scroll-Animation für zukünftige Links hinzu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
