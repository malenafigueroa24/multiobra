document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Manejo del desplazamiento suave (Smooth Scroll)
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');

                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 2. Efecto de sombra en el menú al hacer scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

});

// 3. Función auxiliar para mover la pantalla hacia una sección
function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 4. Función de interacción para WhatsApp
function solicitarPresupuesto(servicio = "") {
    let mensaje = "Hola, me gustaría solicitar un presupuesto.";
    
    if (servicio && servicio !== 'General') {
        mensaje = `Hola, me gustaría solicitar un presupuesto sobre: ${servicio}.`;
    }

    const confirmacion = confirm("¿Deseas abrir WhatsApp para enviar tu consulta?");
    
    if (confirmacion) {
        // Reemplaza con tu número real de teléfono (Código de país + área + número)
        const numeroTelefono = "5493510000000"; 
        const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
        
        window.open(urlWhatsApp, '_blank');
    }
}