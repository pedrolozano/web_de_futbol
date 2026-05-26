// Función para scroll suave hacia secciones
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Función para actualizar goles en tiempo real
function actualizarGoles(elemento, goles) {
    const contador = elemento.querySelector('.golesLocal, .golesVisitante');
    if (contador) {
        contador.textContent = goles;
    }
}

// Event listeners para navegación
document.addEventListener('DOMContentLoaded', function() {
    // Agregar efecto de scroll activo en la barra de navegación
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            scrollToSection(href.substring(1));
        });
    });

    // Efecto de animación en las tarjetas al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar tarjetas de equipos
    const equipoCards = document.querySelectorAll('.equipo-card');
    equipoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observar tarjetas de partidos
    const partidoCards = document.querySelectorAll('.partido-card');
    partidoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Función para simular actualización de resultados
function actualizarResultados() {
    const partidos = document.querySelectorAll('.partido-card');
    partidos.forEach(partido => {
        const golesLocal = partido.querySelector('.golesLocal');
        const golesVisitante = partido.querySelector('.golesVisitante');
        
        // Simular cambios aleatorios (solo para demostración)
        if (golesLocal && golesVisitante) {
            golesLocal.addEventListener('click', function() {
                const nuevoGol = parseInt(this.textContent) + 1;
                this.textContent = nuevoGol;
                this.style.animation = 'none';
                setTimeout(() => {
                    this.style.animation = 'pulse 0.5s ease';
                }, 10);
            });

            golesVisitante.addEventListener('click', function() {
                const nuevoGol = parseInt(this.textContent) + 1;
                this.textContent = nuevoGol;
                this.style.animation = 'none';
                setTimeout(() => {
                    this.style.animation = 'pulse 0.5s ease';
                }, 10);
            });
        }
    });
}

// Llamar a la función de actualización
actualizarResultados();

// Animación CSS para pulso
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
            color: #22c55e;
        }
        100% {
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// Función para filtrar equipos (bonus)
function filtrarEquipos(pais) {
    const cards = document.querySelectorAll('.equipo-card');
    cards.forEach(card => {
        if (pais === 'todos' || card.textContent.includes(pais)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

console.log('Web de Torneo de Fútbol cargada correctamente ⚽');
