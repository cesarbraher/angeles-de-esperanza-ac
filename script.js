document.addEventListener("DOMContentLoaded", () => {
    // Menú Móvil
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const navLinks = document.getElementById("nav-links");

    if (mobileMenuBtn && navLinks) {
        const menuIcon = mobileMenuBtn.querySelector("i");

        const setMenuOpen = (isOpen) => {
            navLinks.classList.toggle("active", isOpen);
            mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
            mobileMenuBtn.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
            if (menuIcon) {
                menuIcon.classList.toggle("fa-bars", !isOpen);
                menuIcon.classList.toggle("fa-xmark", isOpen);
            }
        };

        mobileMenuBtn.addEventListener("click", () => {
            const isOpen = !navLinks.classList.contains("active");
            setMenuOpen(isOpen);
        });

        navLinks.addEventListener("click", (e) => {
            if (e.target.closest("a")) {
                setMenuOpen(false);
            }
        });

        document.addEventListener("click", (e) => {
            if (
                navLinks.classList.contains("active") &&
                !navLinks.contains(e.target) &&
                !mobileMenuBtn.contains(e.target)
            ) {
                setMenuOpen(false);
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && navLinks.classList.contains("active")) {
                setMenuOpen(false);
                mobileMenuBtn.focus();
            }
        });
    }

    // Carga de artículos del blog
    const blogContainer = document.getElementById("blog-posts-container");
    if (blogContainer) {
        blogContainer.innerHTML = `
            <article class="news-card">
                <div>
                    <h3>El papel de la familia en la recuperación</h3>
                    <p>Descubre por qué las visitas de los domingos y nuestras juntas familiares son el pilar del éxito en el proceso de 6 meses...</p>
                </div>
                <a href="/blog" class="news-link">Leer más →</a>
            </article>
            <article class="news-card">
                <div>
                    <h3>Nutrición y sanación neurológica</h3>
                    <p>Nuestra nutrióloga clínica nos explica cómo los alimentos frescos y el plan metabólico combaten el daño de las sustancias...</p>
                </div>
                <a href="/blog" class="news-link">Leer más →</a>
            </article>
            <article class="news-card">
                <div>
                    <h3>Testimonios: Construyendo un nuevo proyecto de vida</h3>
                    <p>La historia de egresados que, con disciplina y amor, lograron reinsertarse en la sociedad y encontrar un nuevo camino...</p>
                </div>
                <a href="/blog" class="news-link">Leer más →</a>
            </article>
        `;
    }
});
