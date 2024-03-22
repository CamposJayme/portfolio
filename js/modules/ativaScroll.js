export default function ativaScroll() {
    const sections = document.querySelectorAll('.js-scroll');

    if (sections.length) {
        function animaScroll() {
            const windowHeight = window.innerHeight * 0.35;
        
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowHeight;
                const isSectionVisible = (sectionTop - windowHeight) < 0;
                if(isSectionVisible) {
                    section.classList.add('mostrar');
                } else {
                    section.classList.remove('mostrar');
                }
            })
        }
        
        animaScroll();
        
        window.addEventListener('scroll', animaScroll);
    }
}

