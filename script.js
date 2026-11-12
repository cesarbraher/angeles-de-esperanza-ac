document.addEventListener("DOMContentLoaded", () => {
    // Menú Móvil
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const navLinks = document.getElementById("nav-links");

    mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    navLinks.addEventListener("click", (e) => {
        if (e.target.tagName === 'A') {
            navLinks.classList.remove("active");
        }
    });

    // Simulación WordPress
    const blogContainer = document.getElementById("blog-posts-container");
    if(blogContainer) {
        setTimeout(() => {
            blogContainer.innerHTML = `
                <div class="news-card">
                    <h3>El papel de la familia en la recuperación</h3>
                    <p>Descubre por qué las visitas de los domingos y nuestras juntas familiares son el pilar del éxito en el proceso de 6 meses...</p>
                    <a href="/blog" style="color: var(--secondary); font-weight: 600; margin-top: 10px; display: inline-block;">Leer más →</a>
                </div>
                <div class="news-card">
                    <h3>Nutrición y sanación neurológica</h3>
                    <p>Nuestra nutrióloga clínica nos explica cómo los alimentos frescos y el plan metabólico combaten el daño de las sustancias...</p>
                    <a href="/blog" style="color: var(--secondary); font-weight: 600; margin-top: 10px; display: inline-block;">Leer más →</a>
                </div>
                <div class="news-card">
                    <h3>Testimonios: Construyendo un nuevo proyecto de vida</h3>
                    <p>La historia de egresados que, con disciplina y amor, lograron reinsertarse en la sociedad y encontrar un nuevo camino...</p>
                    <a href="/blog" style="color: var(--secondary); font-weight: 600; margin-top: 10px; display: inline-block;">Leer más →</a>
                </div>
            `;
        }, 1200);
    }
});
