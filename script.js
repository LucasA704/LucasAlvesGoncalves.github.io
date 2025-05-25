// Este arquivo é para adicionar interatividade ao seu site.
// Por enquanto, podemos deixar ele simples.
console.log("Olá, mundo! O script.js está funcionando.");

// Exemplo: se você quiser uma animação de "scroll suave"
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});