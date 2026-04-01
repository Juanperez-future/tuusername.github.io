// Genera las tarjetas de artículos automáticamente
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('articles-container');
    
    articles.forEach(article => {
        const card = document.createElement('article');
        card.className = 'article-card';
        
        card.innerHTML = `
            <div class="article-meta">
                <span class="article-category">${article.categoria}</span>
                <span>${article.horizonte}</span>
            </div>
            <h3>${article.titulo}</h3>
            <p>${article.descripcion}</p>
            <a href="${article.archivo}" class="read-more">Leer análisis completo →</a>
        `;
        
        container.appendChild(card);
    });
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
