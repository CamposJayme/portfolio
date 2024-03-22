export default function ativaScrollSuave() {
    const linksInternos = document.querySelectorAll('nav a[href^="#"]');

    if (linksInternos.length) {
        function scrollSuave(event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const sections = document.querySelector(href);
            sections.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
        
        linksInternos.forEach((link) => {
            link.addEventListener('click', scrollSuave);
        })
    }
}

